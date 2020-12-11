import React from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 90px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
`

const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    margin: 0 5px 0 0;
    border-radius: 50px;
    background-color: green;
`

const RightContent = styled.TouchableOpacity`
    width: ${WIDTH - 90}px;
    height: 90px;
    padding: 0 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RowTitle = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

const NameTitle = styled.Text`
    font-weight: 700;
    font-size: 18px;
`

const MyFriend = (props) => {
    return (
        <Container>
            <Avatar 
                source={props.srcAvt}
            /> 
        <RightContent>
            <RowTitle>
                <NameTitle>{props.friendName}</NameTitle>
                <TouchableOpacity>
                    <Icon name={"ios-ellipsis-horizontal"} size={20}/> 
                </TouchableOpacity>
            </RowTitle>
            <Text>{props.numOfMutual} bạn chung</Text>
        </RightContent>
        </Container>
    );
};

export { MyFriend };