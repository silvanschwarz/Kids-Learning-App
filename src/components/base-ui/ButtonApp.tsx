import {ImageSourcePropType} from 'react-native';
import React, {memo} from 'react';
import GreenArrowRight from 'src/svgs/GreenArrowRight';
import styled from 'styled-components/native';
import {TextB, TextSB} from 'src/components/base-ui/TextAtm';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

interface Props {
    source: ImageSourcePropType;
    title: string;
    numberLeft: string;
    mb?: number;
    backgroundColor?: string;
    imgHeight: number;
    imgMt: number;
    btnColor: string;
    onPress: () => void;
    imgWidth: number
}

const ButtonApp = memo((props: Props) => {
    return (
        <Container
            onPress={props.onPress}
            activeOpacity={0.8}
            mb={props.mb}
            backgroundColor={props.backgroundColor}>
            <ImageContent
                source={props.source}
                height={props.imgHeight}
                width={props.imgWidth}
                resizeMode={'center'}
                mt={props.imgMt}
            />
            <TextB size={responsiveFontSize(3)} ml={48}>
                {props.title}
            </TextB>
            <TextSB size={responsiveFontSize(2)} mb={24} ml={48}>
                {props.numberLeft}
            </TextSB>
            <ContentBtn>
                <GreenArrowRight btnColor={props.btnColor}/>
            </ContentBtn>
        </Container>
    );
});
export default ButtonApp;

interface PropsContainer {
    mb?: number;
    backgroundColor?: string;
}

interface PropsImageContent {
    height: number;
    width: number
    mt?: number;
}

const ImageContent = styled.Image<PropsImageContent>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  margin-left: ${responsiveWidth(10)}px;
  margin-top: ${props =>
    // @ts-ignore
    props.mt || 0}px;
  margin-bottom: ${responsiveHeight(2)}px;
`;

const ContentBtn = styled.View`
  position: absolute;
  right: ${responsiveWidth(6)}px;
  bottom: ${responsiveHeight(3)}px;
`;

const Container = styled.TouchableOpacity<PropsContainer>`
  width: ${responsiveWidth(85)}px;
  border-radius: 24px;
  background-color: ${props => props.backgroundColor || '#fff'};
  margin-bottom: ${props =>
    // @ts-ignore
    props.mb || 0};
  box-shadow: 0 4px 7px rgba(105, 105, 105, 0.22);
`;
