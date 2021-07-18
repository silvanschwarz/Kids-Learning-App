import React, {useCallback, useMemo, useState} from 'react';
import Container from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {HeaderAppWithHome} from 'src/components/base-ui/HeaderApp';
import {ButtonNext, ButtonPre, ButtonSpeak} from 'src/components/button';
import {TextSB} from 'src/components/base-ui/TextAtm';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alphabet, Alphabets} from 'src/data/alphabets';
import {Control, WrapButtonContinue, ContainerSafeView, Block} from 'src/screens/Draw/components/styledUi';
import {ContainerLottie, ImageGif} from 'src/components/lottie';
import {InterfaceNumber, Numbers} from 'src/data/numbers';
import {ROUTERS} from 'src/ultis/navigations';
// import Sound from 'react-native-sound';

import { Audio } from 'expo-av';

const Draw = () => {
    const {navigate} = useNavigation();
    const route = useRoute();
    // @ts-ignore
    const {idAlphabet, idNumber, isAlphabet} = useMemo(() => route.params, [route]);

    const dataDraw = useMemo<Array<Alphabet | InterfaceNumber>>(() => {
        return isAlphabet ? Alphabets : Numbers;
    }, [isAlphabet]);

    // @ts-ignore
    const [idItem, setIdItem] = useState(isAlphabet ? idAlphabet : idNumber);

    const item = useMemo<Alphabet | InterfaceNumber>(() => {
        return dataDraw[idItem];
    }, [idItem, dataDraw]);

    const isEndNext = useMemo(() => {
        return idItem === dataDraw.length - 1;
    }, [idItem, dataDraw]);
    const isEndPrev = useMemo(() => idItem === 0, [idItem]);

    const onNext = useCallback(() => {
        if (isEndNext) return;
        setIdItem(idItem + 1);
    }, [idItem, isEndNext]);

    const onPrev = useCallback(() => {
        if (isEndPrev) return;
        setIdItem(idItem - 1);
    }, [idItem, isEndPrev]);

    const callbackOnNext = useCallback((idItem)=>{
        setIdItem(idItem)
    },[]);

    const onContinue = useCallback(() => {
        navigate(ROUTERS.AnimalWithAlphabet, {
            callbackOnNext: callbackOnNext,
            idItem,
            isAlphabet,
            dataDraw,
        });
    }, [item]);

    const onSpeaker = useCallback(async () => {
        const soundObject = new Audio.Sound();
        // const soundObject = await new Sound(item.sound, (error => {
        //     if (!error) {
        //         soundObject.play();
        //     }
        // }));
        try {
            await soundObject.loadAsync(item.sound);
            await soundObject.playAsync();
            // Your sound is playing!

            // Don't forget to unload the sound from memory
            // when you are done using the Sound object
            await soundObject.unloadAsync();
        } catch (error) {
            // An error occurred!
        }
    }, [item]);

    return (
        <Container>
            <ContainerImage source={require('src/assets/MainBG.png')}/>
            <ContainerSafeView>
                <HeaderAppWithHome title={'Let’s write!'}/>
                <ContainerLottie>
                    <ImageGif source={item.gif1} onPress={onSpeaker}/>
                    {isAlphabet && <ImageGif
                        // @ts-ignore
                      source={item.gif2}
                      onPress={onSpeaker}
                    />}
                </ContainerLottie>
                <Control>
                    <ButtonPre onPress={onPrev} isEnd={isEndPrev}/>
                    <ButtonSpeak onPress={onSpeaker}/>
                    <ButtonNext onPress={onNext} isEnd={isEndNext}/>
                </Control>
                <TextSB size={24} color={'#595959'} center mb={10} mt={38}>
                    {isAlphabet ? 'The animals is waiting for you!' : item.textEng}
                </TextSB>
                {isAlphabet ? <WrapButtonContinue onPress={onContinue}/> : <Block/>}
            </ContainerSafeView>
        </Container>
    );
};

export default Draw;
