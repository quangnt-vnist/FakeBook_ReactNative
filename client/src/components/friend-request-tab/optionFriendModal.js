import React from 'react';

import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Container = styled.View`
    backgroundColor: #fff; 
    height: ${ HEIGHT/**385px*/}px;
    borderTopLeftRadius: 10px; 
    borderTopRightRadius: 10px;
`

const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding: 5px;
    margin: 0 5px;
`

const Separator = styled.View`
    width: 100%;
    margin: 2px 0;
	height: 1px;
	background: #E2E7E7;
`

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    borderRadius: 50px;
`

const RightContent = styled.TouchableOpacity`
    margin-left: 10px;
    height: 50px;
    justify-content: center;
    padding: 5px;
    marginRight: 20px;
`

const FriendName = styled.Text`
    font-weight: 700;
    font-size: 21px;
`

const OptionTitle = styled.Text`
    font-weight: 700;
    font-size: 18px;
`

const IconView = styled.View`

`

const OptionFriendModal = () => {
    return (
        <Container>
            <Row>
                <TouchableOpacity
                    onPress={() => alert("Bay đến trang cá nhân của thằng này")}
                >
                    <Avatar
                        source={require("./../../public/img/assets/user1.jpg")}
                    />
                </TouchableOpacity>
                <RightContent>
                    <FriendName>Nguyễn Thế Quang</FriendName>
                    <Text>Là bạn bè từ tháng 4 năm 1999</Text>
                </RightContent>
            </Row>
            <Separator />

            <Row>
                <IconView>
                    <Icon5 name='facebook-messenger' size={20} color="#111" />
                </IconView>
                <RightContent>
                    <OptionTitle>Nhắn tin cho Quang</OptionTitle>
                </RightContent>
            </Row>
            <Row>
                <IconView>
                    <MaterialIcon name="close-box-multiple-outline" color="#111" size={23} />
                </IconView>
                <RightContent
                    onPress={() => { alert("Bỏ theo dõi!!!") }}
                >
                    <OptionTitle>Bỏ theo dõi Quang</OptionTitle>
                    <Text>Không hiển thị bài viết của Quang, nhưng vẫn là bạn bè</Text>
                </RightContent>
            </Row>
            <Row>
                <IconView>
                    <MaterialIcon name="block-helper" color="#111" size={23} />
                </IconView>
                <RightContent>
                    <OptionTitle>Chặn Quang</OptionTitle>
                    <Text>Quang Không thể nhìn thấy bạn hoặc liên hệ với bạn trên FakeBook</Text>
                </RightContent>
            </Row>
            <Row>
                <IconView>
                    <Icon5 name="user-times" color="#111" size={20} />
                </IconView>
                <RightContent>
                    <OptionTitle>Hủy kết bạn với Quang</OptionTitle>
                    <Text>Xóa Quang khỏi danh sách bạn bè</Text>
                </RightContent>
            </Row>
            <Separator />
        </Container>
    );
};

export { OptionFriendModal };