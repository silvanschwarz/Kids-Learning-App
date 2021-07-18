import LottieView from 'lottie-react-native';
import React, {memo} from 'react';
import styled from 'styled-components/native';

interface Props {
    source: any;
    onPress?: () => void
}

const ItemLottie = memo((props: Props) => {
    return (
        <ContainerLottie>
            <WrapLottie>
                <LottieView
                    // @ts-ignore
                    source={props.source}
                    autoPlay
                    loop
                />
            </WrapLottie>
        </ContainerLottie>
    );
});

const Lottie = memo((props: Props) => {
    return (
        <WrapLottie>
            <LottieView
                // @ts-ignore
                source={props.source}
                autoPlay
                loop
            />
        </WrapLottie>
    );
});

const ImageGif = memo((props: Props) => {
    return (
        <WrapImage {...props}>
            <Image source={props.source}/>
        </WrapImage>
    )
});


export default ItemLottie;

export {Lottie, ImageGif};

export const ContainerLottie = styled.View`
  flex-direction: row;
  flex: 1;
`;
const WrapLottie = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height:100%;
  resize-mode:center
`;

const WrapImage = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
