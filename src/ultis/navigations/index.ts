import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const ROUTERS = {
  Home: 'Home',
  Intro: 'Intro',
  Learn: 'Learn',
  PlayGame: 'PlayGame',
  Result: 'Result',
  LearnAlphabet: 'LearnAlphabet',
  LearnNumber: 'LearnNumber',
  AnimalWithAlphabet: 'AnimalWithAlphabet',
  Draw: 'Draw',
};

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
