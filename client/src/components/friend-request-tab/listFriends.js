import React, { useState } from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions, TouchableHighlight, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { MyFriend } from './myFriend';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

const RowHeader = styled.View`
    margin: 10px 0 5px 10px;
    width: ${WIDTH - 20}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.Text`
    font-weight: 700;
    font-size: 20px;
`

const TextLink = styled.TouchableOpacity`
    color: #3a86e9
`

const Input = styled.TextInput`
	height: 35px;
    width: ${WIDTH - 20}px;
    margin: 10px;
    padding: 0 0 0 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    background-color: #F0F2F5
`

const IconSearch = styled.View`
    margin: 0 -40px 0 0;
    padding-left: 20px
    z-index: 10;
`

const ListFriends = () => {

    const [txtName, setTxtName] = useState("");

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
        >
            <Row>
                <IconSearch>
                    <Icon name='search' size={20} color="#aaa"/>
                </IconSearch>
                <Input
                    placeholder={"Tìm kiếm bạn bè"}
                    onChangeText={txt => setTxtName(txt)}
                    value={txtName}
                />
            </Row>

            <RowHeader>
                <Title>298 bạn bè</Title>
                <TextLink>
                    <Text style={{color: "#3a86e9"}}>Sắp xếp</Text>
                </TextLink>
            </RowHeader>

            {[1, 2, 3, 4, 5].map((e, key) => <View key={key}>
                <MyFriend
                    id={key}
                    srcAvt={require('./../../public/img/barca_logo2.jpg')}
                    friendName={"Nguyễn Thế Quang"}
                    numOfMutual={18}
                />
            </View>
            )}
            {[1, 2, 3, 4, 5].map((e, key) => <View key={key}>
                <MyFriend
                    id={key}
                    srcAvt={require('./../../public/img/fb_reg.png')}
                    friendName={"Duyên Nguyễn"}
                    numOfMutual={17}
                />
            </View>
            )}
        </ScrollView>
    );
};

export { ListFriends };
