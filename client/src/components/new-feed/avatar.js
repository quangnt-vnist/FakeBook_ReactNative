import React from 'react';

import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`

const Text = styled.Text`
    color: #3a86e9;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: -0.3px;
`
const User = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)};
`
const UserActive = styled.View`
	width: 15px;
	height: 15px;
	border-radius: 8px;
	background: #4bcb1f;    
	position: absolute;
	bottom: -2px;
	right: -2px;
	border-width: 2px;
	border-color: #ffffff;
`

const Avatar = ({ source, online, story }) => {
    return <Container>
        <User source={source} story={story} />
        {online && <UserActive />}
    </Container>
}

export default Avatar;