import styled from "styled-components/native";
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper";
import {ButtonContinue} from "src/components/button";

const ContainerSafeView = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;
`;

const Control = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const WrapButtonContinue = styled(ButtonContinue)`
  align-self: center;
  margin-bottom: 60px;
`;

const Block = styled.View`
  width: 262px;
  height: 78px;
  align-self: center;
  margin-bottom: 60px;
`;


export {
    ContainerSafeView,
    Control,
    WrapButtonContinue,
    Block
}
