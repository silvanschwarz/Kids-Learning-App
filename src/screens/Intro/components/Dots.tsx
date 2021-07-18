import React, { memo } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { width_screen } from 'src/ultis/dimensions';

interface Props {
  scrollX: Animated.Value;
}

const Dots = memo(({ scrollX }: Props) => {
  const left = scrollX.interpolate({
    inputRange: [0, width_screen, width_screen * 2],
    outputRange: [-8, 16, 40],
    extrapolate: 'clamp',
  });
  const opacity1 = scrollX.interpolate({
    inputRange: [0, width_screen, width_screen * 2],
    outputRange: [0, 1, 1],
    extrapolate: 'clamp',
  });
  const opacity2 = scrollX.interpolate({
    inputRange: [0, width_screen, width_screen * 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  const opacity3 = scrollX.interpolate({
    inputRange: [0, width_screen, width_screen * 2],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  return (
    <Container>
      <Dot as={Animated.View} style={{ opacity: opacity1 }} />
      <Dot as={Animated.View} center style={{ opacity: opacity2 }} />
      <Dot as={Animated.View} style={{ opacity: opacity3 }} />
      <DotActive as={Animated.View} style={{ left }} />
    </Container>
  );
});
export default Dots;

interface DotProps {
  center?: boolean;
}
const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #bbbbbb;
  margin-left: ${props => (props.center ? '16px' : '0px')};
  margin-right: ${props => (props.center ? '16px' : '0px')};
`;
const DotActive = styled.View`
  width: 24px;
  height: 8px;
  background-color: #f39bff;
  border-radius: 4px;
  position: absolute;
`;
const Container = styled.View`
  height: 8px;
  position: absolute;
  align-self: center;
  top: 50%;
  flex-direction: row;
`;
