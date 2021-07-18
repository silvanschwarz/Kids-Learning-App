import React, {memo, useCallback} from 'react';
import {TextB, TextR} from 'src/components/base-ui/TextAtm';
import Page from 'src/components/base-ui/Page';
import styled from 'styled-components/native';
import SvgContinue from 'src/svgs/SvgContinue';
import SvgIntroTwo from 'src/svgs/SvgIntroTwo';
import {ContainerCenter} from 'src/components/base-ui/Container';
import {width_screen} from 'src/ultis/dimensions';
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";

interface Props {
    refScroll: any;
}

const IntroTwo = memo((props: Props) => {

    const onPress = useCallback(() => {
        let _refScroll = props.refScroll.current.getNode();
        _refScroll && _refScroll.scrollTo({x: width_screen * 2, y: 0, animated: true});
    }, []);

    return (
        <Page>
            <ContainerCenter>
                <SvgIntroTwo/>
            </ContainerCenter>
            <TextB size={responsiveFontSize(3)} color={'#595959'} mb={26}>
                Learn to write with us
            </TextB>
            <TextR color={'#959595'} size={responsiveFontSize(2)} center>
                Duis aute irure dolor in reprehenderit in{'\n'}
                voluptate velit esse cillum dolore eu fugiat nulla{'\n'}
                pariatur.
            </TextR>
            <ButtonContinue activeOpacity={0.75} onPress={onPress}>
                <SvgContinue/>
            </ButtonContinue>
        </Page>
    );
});

export default IntroTwo;

const ButtonContinue = styled.TouchableOpacity`
   margin-bottom: ${responsiveHeight(9)}px;
`;
