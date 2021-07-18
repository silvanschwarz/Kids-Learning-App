import React, {memo} from 'react';
import Container, {ContainerSafeView} from 'src/components/base-ui/Container';
import HeaderApp from 'src/components/base-ui/HeaderApp';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {ScrollView} from 'react-native';
import DefaultAlphabet from 'src/data/alphabets';
import RowItem from 'src/screens/LearnAlphabet/components/RowItem';

const LearnAlphabet = memo(() => {
    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <ContainerImage source={require('src/assets/BG_Alphabet.png')}/>
                <ContainerSafeView>
                    <HeaderApp title={'The Alphabet'}/>
                    {DefaultAlphabet.map((item, index) => {
                        return <RowItem data={item} key={index}/>;
                    })}
                </ContainerSafeView>
            </ScrollView>
        </Container>
    );
});

export default LearnAlphabet;
