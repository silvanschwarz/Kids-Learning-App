import React from "react";
import styled from "styled-components/native";
import {ButtonSpeakerWord} from "src/components/button";
import {responsiveHeight} from "react-native-responsive-dimensions";


const WrapButtonSpeakerWord = styled(ButtonSpeakerWord)`
    width: 294px;
    align-self: center;
    margin-bottom: ${responsiveHeight(7)}px;
`;
const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const ListAnswer = styled.View`
  flex-direction: row;
   justify-content: center;
   margin-bottom: 32px;
   flex-wrap: wrap;
   flex:1;

`;


export {
    Content,
    WrapButtonSpeakerWord,
    ListAnswer
};
