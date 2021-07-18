import React, {memo} from 'react';
import styled from 'styled-components/native';
import SvgSpeak from 'src/svgs/SvgSpeak';
import SvgNext from 'src/svgs/SvgNext';
import SvgPre from 'src/svgs/SvgPre';
import SvgContinue from 'src/svgs/SvgContinue';
import {StyleSheet, ViewStyle} from 'react-native';
import SvgSmallSpeak from 'src/svgs/SvgSmailSpeak';
import SvgNextLetter from 'src/svgs/SvgNextLetter';
import SvgSpeakerWords from "src/svgs/SvgSpeakerWord";
import {TextB} from "src/components/base-ui/TextAtm";
import SvgCheck from "src/svgs/SvgCheck";
import SvgAnswer from "src/svgs/SvgAnswer";

interface Props {
    onPress?: () => void;
    style?: ViewStyle;
    color?: string;
    isEnd?: boolean;
}

const ButtonSpeak = memo((props: Props) => {
    return (
        <Button onPress={props.onPress} activeOpacity={0.8}>
            <SvgSpeak/>
        </Button>
    );
});

const ButtonNext = memo((props: Props) => {
    if (props.isEnd) {
        return (
            <Button onPress={props.onPress} activeOpacity={0.8} style={{opacity: 0.5}} disabled={true}>
                <SvgNext/>
            </Button>
        );
    }
    return (
        <Button onPress={props.onPress} activeOpacity={0.8}>
            <SvgNext/>
        </Button>
    );
});

const ButtonPre = memo((props: Props) => {
    if (props.isEnd) {
        return (
            <Button onPress={props.onPress} activeOpacity={0.8} style={{opacity: 0.5}} disabled={true}>
                <SvgPre/>
            </Button>
        );
    }
    return (
        <Button onPress={props.onPress} activeOpacity={0.8} isEnd={props.isEnd}>
            <SvgPre/>
        </Button>
    );
});

const ButtonContinue = memo((props: Props) => {
    return (
        <Button onPress={props.onPress} activeOpacity={0.8} {...props}>
            <SvgContinue color={props.color || '#8871FF'}/>
        </Button>
    );
});

const ButtonSmallSpeak = memo((props: Props) => {
    return (
        <Button onPress={props.onPress} activeOpacity={0.8} {...props} style={{alignSelf: 'center'}}>
            <SvgSmallSpeak/>
        </Button>
    );
});

const ButtonNextLetter = memo((props: Props) => {
    return (
        <Button onPress={props.onPress} activeOpacity={0.8} {...props}>
            <SvgNextLetter/>
        </Button>
    );
});

interface ButtonSpeakerWordProps {
    text: string;
    onPress?: () => void;
    style?: ViewStyle;
}

const ButtonSpeakerWord = memo((props: ButtonSpeakerWordProps) => {
    return (
        <Button onPress={props.onPress} activeOpacity={0.8} {...props}>
            <SvgSpeakerWords/>
            <TextB size={32} style={styles.text}>{props.text}</TextB>
        </Button>
    );
});

const ButtonCheck = memo(() => {
    return (
        <Block>
            <SvgCheck/>
        </Block>
    );
});

const ButtonAnswer = memo((props: Props) => {

    return (
        <Block  {...props}>
            <SvgAnswer/>
        </Block>
    )
});
export {
    ButtonSpeak,
    ButtonNext,
    ButtonPre,
    ButtonCheck,
    ButtonContinue,
    ButtonSmallSpeak,
    ButtonNextLetter,
    ButtonSpeakerWord,
    ButtonAnswer
};

const styles = StyleSheet.create({
    text: {
        position: 'absolute'
    },
});

interface ButtonProp {
    isEnd?: boolean;
}

const Button = styled.TouchableOpacity<ButtonProp>`
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isEnd ? 0.5 : 1)};
`;

const Block = styled.View<ButtonProp>`
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isEnd ? 0.5 : 1)};
`;
