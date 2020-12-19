import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

import styled from "styled-components/native";
import { getData } from '../../../helper/requestHelper';
import { pageName } from '../../../navigator/constant.page';
import { AuthActions } from '../redux/action';

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
    
    // console.log('9999\n\n', props);

    var userId, token;
    const useEffectAsync = (effect, inputs) => {
        useEffect(() => {
            effect();
        }, inputs);
    }
    useEffectAsync( async () => {
        userId = await getData('userId');
        token = await getData('auth-token');
        console.log('userId', userId);
        console.log('auth-token', token);
        if(userId) {
            props.getProfile();
            props.navigation.replace(pageName.main.MAIN);
        } else {
            props.navigation.replace(pageName.LOG_IN_NEW_ACC);
        }
    }, [])

    return (
        <Container>
            <TextLogo>fakeBook</TextLogo>
            <ActivityIndicator color="#ccc" size="large"/>
        </Container>
    );
};

const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    getProfile: AuthActions.getProfile,
}
let connected = connect(mapStateToProps, mapActions)(Welcome);

export { connected as Welcome }