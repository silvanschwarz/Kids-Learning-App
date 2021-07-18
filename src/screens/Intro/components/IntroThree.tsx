import React, {memo, useCallback} from 'react';
import {TextB, TextR} from 'src/components/base-ui/TextAtm';
import Page from 'src/components/base-ui/Page';
import styled from 'styled-components/native';
import SvgLetGo from 'src/svgs/SvgLetgo';
import SvgIntroThree from 'src/svgs/SvgIntroThree';
import {ContainerCenter} from 'src/components/base-ui/Container';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import {responsiveHeight, responsiveFontSize} from "react-native-responsive-dimensions";
import useAsyncStorage from "src/hooks//useAsyncStorage";
import KEY_ASYNC_STORAGE from "src/ultis/keyAsyncStorage";

const IntroThree = memo(() => {
    const navigation = useNavigation();
    const [isIntro, setIsIntro] = useAsyncStorage(KEY_ASYNC_STORAGE.IS_INTRO);

    const onPress = useCallback(() => {
        navigation.reset({
            index: 0,
            routes: [{name: ROUTERS.Home}],
        });
        setIsIntro(true);
    }, []);

    return (
        <Page>
            <ContainerCenter>
                <SvgIntroThree/>
            </ContainerCenter>
            <TextB size={responsiveFontSize(3)} color={'#595959'} mb={13} center>
                Discover new letters{'\n'}with Animals name
            </TextB>
            <TextR color={'#959595'} size={responsiveFontSize(2)} center>
                Excepteur sint occaecat cupidatat non{'\n'}proident, sunt in culpa qui officia
            </TextR>
            <ButtonLetGo activeOpacity={0.75} onPress={onPress}>
                <SvgLetGo/>
            </ButtonLetGo>
        </Page>
    );
});

export default IntroThree;

const ButtonLetGo = styled.TouchableOpacity`
  margin-bottom: ${responsiveHeight(9)}px;
`;
