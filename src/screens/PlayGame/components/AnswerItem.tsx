import React, {memo, useCallback, useState} from 'react';
import LottieView from 'lottie-react-native';

import styled from 'styled-components/native';
import {ButtonAnswer, ButtonCheck} from 'src/components/button';
import {width_screen} from 'src/ultis/dimensions';

export interface AnswerItemProps {
  id: number;
  lottie: any;
  correctId: number;
  goResult: (isCorrect: boolean) => void;
  disable: boolean;
}

const AnswerItem = memo((props: AnswerItemProps) => {
  const [isChoice, setIsChoice] = useState(false);
  const onPressChoice = useCallback(() => {
    setIsChoice(true);
    const _isCorrect = props.id === props.correctId;
    props.goResult(_isCorrect);
  }, []);

  return (
    <Choice onPress={onPressChoice} disabled={props.disable}>
      <Container>
        <LottieView
          // @ts-ignore
          source={props.lottie}
          autoPlay
        />
      </Container>
      {isChoice ? <ButtonCheck /> : <ButtonAnswer />}
    </Choice>
  );
});

export default AnswerItem;

const Choice = styled.TouchableOpacity`
  width: ${width_screen / 2}px;
  height: 50%;
`;

const Container = styled.View`
  flex: 1;
`;
