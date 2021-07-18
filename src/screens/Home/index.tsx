import React, { memo } from 'react';
import Container from 'src/components/base-ui/Container';
import { StyleSheet } from 'react-native';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import { ButtonLearn, ButtonPlay } from 'src/screens/Home/component/Button';

const Home = memo(() => {
  return (
    <Container style={styles.container}>
      <ContainerImage source={require('src/assets/BG_MainScreen.png')} />
      <ButtonLearn />
      <ButtonPlay />
    </Container>
  );
});

export default Home;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
