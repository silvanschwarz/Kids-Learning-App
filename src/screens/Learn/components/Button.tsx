import React, {useCallback} from 'react';
import ButtonApp from 'src/components/base-ui/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import {responsiveHeight} from "react-native-responsive-dimensions";

const ButtonWords = () => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate(ROUTERS.LearnAlphabet);
    }, []);

    return (
        <ButtonApp
            source={require('src/assets/ABC_Block.png')}
            title={'Learn Words'}
            numberLeft={'11 words left'}
            btnColor={'#FE6230'}
            onPress={onPress}
            backgroundColor={'#E85151'}
            mb={responsiveHeight(6)}
            imgMt={23}
            imgHeight={responsiveHeight(15.6)}
            imgWidth={responsiveHeight(15.6) / 106 * 204}
        />
    );
};

const ButtonNumber = () => {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate(ROUTERS.LearnNumber);
    }, []);

    return (
        <ButtonApp
            source={require('src/assets/BlockNumber.png')}
            title={'Learn Numbers'}
            numberLeft={'5 numbers left'}
            btnColor={'#009BFE'}
            onPress={onPress}
            backgroundColor={'#7979E0'}
            mb={responsiveHeight(6)}
            imgMt={23}
            imgHeight={responsiveHeight(15.6)}
            imgWidth={responsiveHeight(15.6) / 106 * 204}
        />
    );
};

export {ButtonWords, ButtonNumber};
