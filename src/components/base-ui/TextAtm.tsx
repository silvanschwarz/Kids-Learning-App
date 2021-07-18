import React from 'react';
import styled from 'styled-components/native';

interface Props {
  size?: number;
  color?: string;
  mb?: number;
  mt?: number;
  ml?: number;
  lh?: number;
  center?: boolean;
}
const TextSB = styled.Text<Props>`
  font-size: ${props => `${props.size}` || '14'}px;
  color: ${props => props.color || '#fff'};
  font-family: Atma-SemiBold;
  margin-bottom: ${props => props.mb || 0}px;
  margin-top: ${props => props.mt || 0}px;
  line-height: ${props => props.lh || 0}px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-left: ${props => props.ml || 0}px;
`;
const TextR = styled.Text<Props>`
  font-size: ${props => `${props.size}` || '14'}px;
  color: ${props => props.color || '#fff'};
  font-family: Atma-Regular;
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-bottom: ${props => props.mb || 0}px;
`;
const TextM = styled.Text<Props>`
  font-size: ${props => `${props.size}` || '14'}px;
  color: ${props => props.color || '#fff'};
  font-family: Atma-Medium;
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-bottom: ${props => props.mb || 0}px;
`;
const TextL = styled.Text<Props>`
  font-size: ${props => `${props.size}` || '14'}px;
  color: ${props => props.color || '#fff'};
  font-family: Atma-Light;
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-bottom: ${props => props.mb || 0}px;
`;
const TextB = styled.Text<Props>`
  font-size: ${props => `${props.size}` || '14'}px;
  color: ${props => props.color || '#fff'};
  font-family: Atma-Bold;
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-bottom: ${props => props.mb || 0}px;
  margin-top: ${props => props.mt || 0}px;
  margin-left: ${props => props.ml || 0}px;
`;

export { TextB, TextL, TextM, TextR, TextSB };
