import React, {useCallback} from "react";
import styled from "styled-components/native";
import {TextB} from "src/components/base-ui/TextAtm";
import {ButtonContinue} from "src/components/button";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {StyleSheet} from "react-native";
import CogiHappy from "src/svgs/CogiHappy";
import {useRoute, useNavigation} from "@react-navigation/native";
import {ROUTERS} from "src/ultis/navigations";

const CorrectAnswer = () => {
    const {navigate} = useNavigation();
    const onPress = useCallback(() => {navigate(ROUTERS.PlayGame)},[] );
    return (
        <Container>
            <CogiHappy/>
            <TextB
                size={24}
                color={'#FFC62B'}
                center={true}
                mb={11}
            >
                Yay! You are correct.
            </TextB>
            <ButtonContinue
                color={'#FFC62B'}
                style={styles.btnShadow}
                onPress = {onPress}
            />
        </Container>
    );
};

export default CorrectAnswer;

const styles = StyleSheet.create({
    btnShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

const Container = styled.View`
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding-bottom: ${getBottomSpace() + 106}px;
`;
