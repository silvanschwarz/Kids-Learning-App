import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import {Alphabet} from 'src/data/alphabets';
import {TextB} from 'src/components/base-ui/TextAtm';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';

interface Props {
    data: Array<Alphabet>;
}

const RowItem = memo((props: Props) => {
    const navigation = useNavigation();

    const onPress = useCallback((id: number) => {
        navigation.navigate(ROUTERS.Draw, {
            idAlphabet: id,
            isAlphabet: true,
        });
    }, []);

    return (
        <Container>
            {props.data.map(item => {
                return (
                    <ItemAlphabet
                        activeOpacity={0.8}
                        key={item.id}
                        onPress={() => {
                            onPress(item.id);
                        }}>
                        <TextB size={56}>{item.text}</TextB>
                    </ItemAlphabet>
                );
            })}
        </Container>
    );
});
export default RowItem;
const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
`;

const ItemAlphabet = styled.TouchableOpacity`
  width: 88px;
  height: 88px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
  border-radius: 24px;
  background-color: #dadada;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
`;
