import React, {useCallback} from "react";
import styled from "styled-components/native";
import {TextB} from "src/components/base-ui/TextAtm";
import {ButtonContinue} from "src/components/button";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {StyleSheet} from "react-native";
import CogiSad from "src/svgs/CogiSad";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ROUTERS} from "src/ultis/navigations";

const WrongAnswer = () => {
    const {navigate} = useNavigation();
    const onPress = useCallback(() => {navigate(ROUTERS.PlayGame)},[] );
    return (
        <Container>
            <CogiSad/>
            <TextB
                size={24}
                color={'#F2564C'}
                center={true}
                mb={11}
            >
                Oops! Wrong answer.
            </TextB>
            <ButtonContinue
                onPress={onPress}
                color={'#F2564C'}
                style={styles.btnShadow}
            />
        </Container>
    );
};

export default WrongAnswer;

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
