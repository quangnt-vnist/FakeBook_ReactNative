import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styled from "styled-components/native";
import { getData } from '../../../helper/requestHelper';
import { pageName } from '../../../navigator/constant.page';

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    justifyContent: center;
    alignItems: center;
`

const TextLogo = styled.Text`
    fontSize: 50px;
    fontWeight: 700;
    color: #3a86e9;
`
const Welcome = (props) => {
    
    var userId;
    const useEffectAsync = (effect, inputs) => {
        useEffect(() => {
            effect();
        }, inputs);
    }
    useEffectAsync( async () => {
        userId = await getData('userId');
        console.log('userId', userId);
        if(userId) {
            props.navigation.navigate(pageName.main.MAIN);
        } else {
            props.navigation.navigate(pageName.LOG_IN_NEW_ACC);
        }
    }, [])

    return (
        <Container>
            <TextLogo>fakeBook</TextLogo>
            <ActivityIndicator color="#ccc" size="large"/>
        </Container>
    );
};

export default Welcome;