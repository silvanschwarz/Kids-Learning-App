import React, {memo, useCallback} from 'react';
import {TextB, TextR} from 'src/components/base-ui/TextAtm';
import SvgStart from 'src/svgs/SvgStart';
import Page from 'src/components/base-ui/Page';
import SvgIntroOne from 'src/svgs/SvgIntroOne';
import styled from 'styled-components/native';
import {ContainerCenter} from 'src/components/base-ui/Container';
import {width_screen} from 'src/ultis/dimensions';
import {responsiveHeight} from "react-native-responsive-dimensions";

interface Props {
    refScroll: any;
}

const IntroOne = memo((props: Props) => {
    const onPress = useCallback(() => {
        let _refScroll = props.refScroll.current.getNode();
        _refScroll && _refScroll.scrollTo({x: width_screen, y: 0, animated: true});
    }, []);

    return (
        <Page>
            <ContainerCenter>
                <SvgIntroOne/>
            </ContainerCenter>
            <TextB size={24} color={'#595959'} mb={26}>
                The Alphabet for your kid
            </TextB>
            <TextR color={'#959595'} size={16} center>
                Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed do eiusmod tempor
                incididunt{'\n'}ut labore et dolore magna aliqua.
            </TextR>
            <ButtonStart activeOpacity={0.75} onPress={onPress}>
                <SvgStart/>
            </ButtonStart>
        </Page>
    );
});

export default IntroOne;

const ButtonStart = styled.TouchableOpacity`
   margin-bottom: ${responsiveHeight(9)}px;
`;
