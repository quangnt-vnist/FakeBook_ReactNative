import React from 'react';

import styled from "styled-components/native";
import Avatar from "./avatar";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView } from 'react-native';

import { pageName } from '../../navigator/constant.page'
import { AuthActions } from '../auth/redux/action';
import { connect } from 'react-redux';

const Container = styled.View`
	width: 100%;
	height: 92px;
`
const Row = styled.View`
	flex-direction: row;
	background: #ffffff;
	width: 100%;
	padding: 0 11px;
	align-items: center;
`
const Input = styled.TouchableOpacity`
	height: 40px;
    width: 85%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
    display: flex;
    justify-content: center;
`
const Divider = styled.View`
	width: 100%;
	height: 0.5px;
	background: #f0f0f0;
`
const Menu = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 30px;
`
const MenuText = styled.Text`
	padding-left: 11px;
	font-weight: 500;
	font-size: 12px;
`
const Separator = styled.View`
	width: 1px;
	height: 26px;
	background: #f0f0f0;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`
const ToolBar = (props) => {
    const { auth } = props;

    const onPressCreatePost = () => {
        props.navigation.navigate(pageName.post_NEW_POST)
    }

    const onOpenProfile = () => {
        props.navigation.navigate(pageName.profile)
    }

    return (
        <>
            <Container>
                <Row>
                    <TouchableOpacity
                        onPress={() => onOpenProfile()}
                    >
                        <Avatar
                            // source={require('./../../public/img/assets/user1.jpg')} 
                            source={{ uri: `https://fakebook-server.herokuapp.com${auth.profile?.avatar}` }}
                        />
                    </TouchableOpacity>

                    <Input
                        onPress={onPressCreatePost}
                    >
                        <Text>Bạn đang nghĩ gì?</Text>
                    </Input>
                    {/* <Input placeholder="Bạn đang nghĩ gì?" /> */}
                </Row>
                <Divider />
                <Row>
                    <Menu>
                        <IonicIcon name='ios-videocam' size={22} color='#F44337' />
                        <MenuText>Phát trực tiếp</MenuText>
                    </Menu>
                    <Separator />

                    <Menu>
                        <MaterialIcon
                            name='photo-size-select-actual'
                            size={20}
                            color='#4CAF50'
                        />
                        <MenuText>Ảnh</MenuText>
                    </Menu>
                    <Separator />

                    <Menu>
                        <MaterialCommunityIcon
                            name='video-plus'
                            size={22}
                            color='#E141FC'
                        />
                        <MenuText>Phòng họp mặt</MenuText>
                    </Menu>
                </Row>
            </Container>
            <BottomDivider />
        </>
    )

}

const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {};

let connected = connect(mapStateToProps, mapActions)(ToolBar);

export { connected as ToolBar }
// export default ToolBar;