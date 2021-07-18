import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const width_current = 375; //Ip 11
const height_current = 812; //Ip 11

const scaleW = width / width_current;
const scaleH = height / height_current;
const width_screen = width;
const height_screen = height;
export { scaleW, scaleH, width_screen, height_screen };
