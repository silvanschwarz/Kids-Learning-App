import React, {memo, useCallback, useEffect} from 'react';
import Container, {ContainerCenter} from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {useNavigation, useRoute} from '@react-navigation/native';
import CogiHappy from 'src/svgs/CogiHappy';
import {TextB} from 'src/components/base-ui/TextAtm';
import {
  WrapButtonContinue,
  WrapContainerSafeView,
} from 'src/screens/Result/components/styledUi';
import CogiSad from 'src/svgs/CogiSad';
import {HeaderAppWithHome} from 'src/components/base-ui/HeaderApp';
import {InteractionManager} from 'react-native';

const Result = memo(() => {
  const route = useRoute();
  const {goBack} = useNavigation();

  // @ts-ignore
  const {isCorrect, resetQuestion, setFocusState} = route.params;

  const onContinue = useCallback(() => {
    resetQuestion(isCorrect);
    InteractionManager.runAfterInteractions(() => {
      goBack();
    });
  }, []);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setFocusState(false);
    });
  }, []);

  return (
    <Container>
      <ContainerImage source={require('src/assets/BG_Animal.png')} />

      <WrapContainerSafeView>
        <HeaderAppWithHome title={''} hideBack />
        <ContainerCenter>
          {isCorrect ? <CogiHappy /> : <CogiSad />}
          <TextB
            size={24}
            color={isCorrect ? '#FFC62B' : '#F2564C'}
            center={true}
            mb={11}
            mt={50}>
            {isCorrect ? 'Yay! You are correct.' : 'Oops! Wrong answer.'}
          </TextB>
          <WrapButtonContinue
            color={isCorrect ? '#FFC62B' : '#F2564C'}
            onPress={onContinue}
          />
        </ContainerCenter>
      </WrapContainerSafeView>
    </Container>
  );
});

export default Result;
