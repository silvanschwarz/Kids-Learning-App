import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import MainNavigation from 'src/nav/MainNavigation';
import React from 'react';
import {useFonts} from "expo-font";

console.disableYellowBox = true;

const Evez = () => {
    let [fontsLoaded] = useFonts({
        'Atma-Bold': require('./assets/fonts/Atma-Bold.ttf'),
        'Atma-Light': require('./assets/fonts/Atma-Light.ttf'),
        'Atma-Medium': require('./assets/fonts/Atma-Medium.ttf'),
        'Atma-Regular': require('./assets/fonts/Atma-Regular.ttf'),
        'Atma-SemiBold': require('./assets/fonts/Atma-SemiBold.ttf'),
        'DINCondensed-Bold': require('./assets/fonts/DINCondensed-Bold.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic': require('./assets/fonts/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-ThinItalic': require('./assets/fonts/Montserrat-ThinItalic.ttf'),
        'PlayfairDisplay-Black': require('./assets/fonts/PlayfairDisplay-Black.ttf'),
        'PlayfairDisplay-BlackItalic': require('./assets/fonts/PlayfairDisplay-BlackItalic.ttf'),
        'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
        'PlayfairDisplay-BoldItalic': require('./assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
        'PlayfairDisplay-ExtraBold': require('./assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
        'PlayfairDisplay-ExtraBoldItalic': require('./assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf'),
        'PlayfairDisplay-Italic': require('./assets/fonts/PlayfairDisplay-Italic.ttf'),
        'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
        'PlayfairDisplay-MediumItalic': require('./assets/fonts/PlayfairDisplay-MediumItalic.ttf'),
        'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
        'PlayfairDisplay-SemiBold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
        'PlayfairDisplay-SemiBoldItalic': require('./assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <MainNavigation/>;
}
export default Evez

