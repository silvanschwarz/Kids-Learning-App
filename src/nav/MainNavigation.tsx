import React, {memo, useEffect} from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {ActivityIndicator, Platform, UIManager, StatusBar} from 'react-native';
import useAsyncStorage from 'src/hooks/useAsyncStorage';
import KEY_ASYNC_STORAGE from 'src/ultis/keyAsyncStorage';
import {NavigationContainer, Navigator, Screen, ROUTERS} from 'src/ultis/navigations';
import Home from 'src/screens/Home';
import Intro from "src/screens/Intro";
import PlayGame from "src/screens/PlayGame";
import Learn from "src/screens/Learn";
import LearnAlphabet from 'src/screens/LearnAlphabet';
import LearnNumber from 'src/screens/LearnNumber';
import Draw from 'src/screens/Draw';
import AnimalWithAlphabet from "src/screens/AnimalWithAlphabet";
import Result from 'src/screens/Result';
import {ContainerCenter} from 'src/components/base-ui/Container';
// import Sound from 'react-native-sound';
// import { Audio } from 'expo-av';

const optionNavigator: StackNavigationOptions = {
    headerShown: false,
};

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const MainNavigation = memo(() => {
    const [isIntro, setValue, isLoading] = useAsyncStorage(KEY_ASYNC_STORAGE.IS_INTRO);

    if (isLoading) {
        return <ContainerCenter>
            <StatusBar backgroundColor="transparent" translucent/>
            <ActivityIndicator/>
        </ContainerCenter>
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor="transparent" translucent barStyle={'dark-content'}/>
            <Navigator screenOptions={optionNavigator} initialRouteName={isIntro ? 'Home' : 'Intro'}>
                <Screen name={ROUTERS.Intro} component={Intro}/>
                <Screen name={ROUTERS.Home} component={Home}/>
                <Screen name={ROUTERS.PlayGame} component={PlayGame}/>
                <Screen name={ROUTERS.Learn} component={Learn}/>
                <Screen name={ROUTERS.LearnAlphabet} component={LearnAlphabet}/>
                <Screen name={ROUTERS.LearnNumber} component={LearnNumber}/>
                <Screen name={ROUTERS.Draw} component={Draw}/>
                <Screen name={ROUTERS.AnimalWithAlphabet} component={AnimalWithAlphabet}/>
                <Screen name={ROUTERS.Result} component={Result}/>
            </Navigator>
        </NavigationContainer>
    );
});

export default MainNavigation;
