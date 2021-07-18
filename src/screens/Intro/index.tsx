import React, {memo, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Container from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import IntroOne from 'src/screens/Intro/components/IntroOne';
import IntroTwo from 'src/screens/Intro/components/IntroTwo';
import IntroThree from 'src/screens/Intro/components/IntroThree';
import Dots from 'src/screens/Intro/components/Dots';

const Intro = memo(() => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const refScroll = useRef(null);

    return (
        <Container>
            <ContainerImage source={require('src/assets/MainBG.png')}/>
            <Animated.ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                scrollEventThrottle={16}
                // @ts-ignore
                ref={refScroll}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}])}>
                <IntroOne refScroll={refScroll}/>
                <IntroTwo refScroll={refScroll}/>
                <IntroThree/>
            </Animated.ScrollView>
            <Dots scrollX={scrollX}/>
        </Container>
    );
});

export default Intro;

const styles = StyleSheet.create({
    contentContainerStyle: {
        width: '300%',
        height: '100%',
    },
});
