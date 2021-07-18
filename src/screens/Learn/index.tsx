import React, { memo } from 'react';
import Container, {
  ContainerJustEnd,
  ContainerSafeView,
} from 'src/components/base-ui/Container';
import { ButtonNumber, ButtonWords } from 'src/screens/Learn/components/Button';
import HeaderApp from 'src/components/base-ui/HeaderApp';
import ContainerImage from 'src/components/base-ui/ContainerImage';

const Learn = memo(() => {
  return (
    <Container>
      <ContainerImage source={require('src/assets/BgLearn.png')} />
      <ContainerSafeView>
        <HeaderApp title={'Learn'} />
        <ContainerJustEnd>
          <ButtonWords />
          <ButtonNumber />
        </ContainerJustEnd>
      </ContainerSafeView>
    </Container>
  );
});

export default Learn;
