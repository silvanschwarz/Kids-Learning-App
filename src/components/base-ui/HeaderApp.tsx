import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import SvgArrowLeft from 'src/svgs/SvgArrowLeft';
import {TextB} from 'src/components/base-ui/TextAtm';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import SvgHome from 'src/svgs/SvgHome';
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

interface Props {
    title: string;
    keyPressHome?: string;
    hideBack?: boolean
}

const HeaderApp = memo((props: Props) => {
    const navigation = useNavigation();
    const onBack = useCallback(() => {
        navigation.goBack();
    }, []);

    return (
        <Container>
            <Button onPress={onBack}>
                <SvgArrowLeft/>
            </Button>
            <TextB size={32} color={'#595959'} center>
                {props.title}
            </TextB>
            <Block/>
        </Container>
    );
});

const HeaderAppWithHome = memo((props: Props) => {
    const navigation = useNavigation();
    const onBack = useCallback(() => {
        navigation.goBack();
    }, []);
    const onHome = useCallback(() => {
        navigation.navigate(props.keyPressHome || ROUTERS.Home);
    }, []);
    return (
        <Container>
            {props.hideBack ? <Block/> : <Button onPress={onBack}>
                <SvgArrowLeft/>
            </Button>}
            <TextB size={32} color={'#595959'} style={{flex: 1}} center>
                {props.title}
            </TextB>
            <Button onPress={onHome}>
                <SvgHome/>
            </Button>
        </Container>
    );
});

export default HeaderApp;
export {HeaderAppWithHome};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: ${responsiveWidth(5)}px;
  padding-right: ${responsiveWidth(5)}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(3)}px;
  padding-top:5px
`;

const Button = styled.TouchableOpacity`
  box-shadow: 0 4px 7px rgba(105, 105, 105, 0.22);
`;
const Block = styled.View`
  width: 32px;
  height: 32px;
`;
