import React from 'react';
import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ContainerCenter = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
`;

const ContainerJustEnd = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

interface Props {
  alignCenter?: boolean;
  row?: boolean;
}

const ContainerSafeView = styled.View<Props>`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;
`;

export default Container;

export { ContainerCenter, ContainerSafeView, ContainerJustEnd };
