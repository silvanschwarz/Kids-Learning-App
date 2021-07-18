import React, {memo, useCallback} from 'react';
import ButtonApp from 'src/components/base-ui/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import {responsiveHeight} from "react-native-responsive-dimensions";

const ButtonLearn = memo(() => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate(ROUTERS.Learn);
    }, []);

    return (
        <ButtonApp
            source={require('src/assets/ABC_Block.png')}
            title={'The Alphabet'}
            numberLeft={'11 words left'}
            mb={responsiveHeight(6)}
            imgMt={23}
            backgroundColor={'#D3BA50'}
            imgHeight={responsiveHeight(15.6)}
            imgWidth={responsiveHeight(15.6) / 106 * 160}
            btnColor={'#00A100'}
            onPress={onPress}
        />
    );
});

const ButtonPlay = memo(() => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate(ROUTERS.PlayGame);
    }, []);
    return (
        <ButtonApp
            source={require('src/assets/Animals_head.png')}
            title={'Play Game'}
            numberLeft={'7 puzzle'}
            mb={responsiveHeight(11)}
            backgroundColor={'#B4C0FF'}
            imgHeight={responsiveHeight(15.6)}
            imgWidth={responsiveHeight(15.6) / 127 * 200}
            btnColor={'#0D8CDD'}
            onPress={onPress}
            imgMt={13}
        />
    );
});

export {ButtonLearn, ButtonPlay};
