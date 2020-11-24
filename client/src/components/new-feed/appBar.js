import React from 'react';

import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Container = styled.View`
    width: 100%;
    height: 58px;
    padding: 0 11px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
`

const Text = styled.Text`
    color: #3a86e9;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: -0.3px;
`

const Row = styled.View`
    flex-direction: row
`

const Button = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 21px;
    background: #eee;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`

const AppBar = () => {
    return <Container>
        <Text>facebook</Text>
        <Row>
            <Button>
                <Icon name='search' size={20} color="black" />
            </Button>
            <Button>
                <Icon5 name='facebook-messenger' size={20} color="black" />
            </Button>
        </Row>
    </Container>
}

export default AppBar;