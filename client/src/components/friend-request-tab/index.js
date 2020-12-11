import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { FriendItem } from './friendItem';
import { AllRequest } from './allRequest';

import styled from 'styled-components/native';
import { pageName } from '../../navigator/constant.page';

const Title = styled.Text`
    margin: 0 0 0 10px;
    font-size: 30px;
    font-weight: 700;
`

const Row = styled.View`
	align-items: center;
	flex-direction: row;
`

const ButtonHeader = styled.TouchableOpacity`
    height: 32px;
    align-items: center;
    margin: 5px 10px;
    padding: 0 10px;
    justify-content: center;
    border-radius: 20px;
    background-color: #E2E7E7
`
const CenterView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Separator = styled.View`
    width: 95%;
    margin: 2px 0;
	height: 1px;
	background: #E2E7E7;
`

const TitleContent = styled.Text`
    margin: 0 0 0 10px;
    font-size: 22px;
    font-weight: 700;
`

const RowHeaderContent = styled.View`
    width: 98%
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

const ShowAllButton = styled.TouchableOpacity`
    width: 95%;
    height: 35px;
    margin: 0 0 10px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #E2E7E7
`

function FriendRequestTab(props) {

    const onPressShowAll = () => {
        props.navigation.navigate(pageName.friend_tab.SHOW_ALL);
    }
    const onPressSuggest = () => {
        props.navigation.navigate(pageName.friend_tab.SUGGEST_FRIEND);
    }
    
    return (
        <ScrollView
            style={{ backgroundColor: "#fff" }}
            showsVerticalScrollIndicator={false}
        >
            <Title>Bạn bè</Title>
            <Row>
                <ButtonHeader
                    onPress={onPressSuggest}
                >
                    <Text>Gợi ý</Text>
                </ButtonHeader>
                <ButtonHeader>
                    <Text>Tất cả bạn bè</Text>
                </ButtonHeader>
            </Row>
            <CenterView>
                <Separator />
                <Separator />
            </CenterView>
            <RowHeaderContent>
                <Row>
                    <TitleContent>Lời mời kết bạn</TitleContent>
                    <TitleContent style={{ color: "#ED2946" }}>36</TitleContent>
                </Row>
                <TouchableOpacity
                    onPress={onPressShowAll}
                >
                    <Text style={{ color: "#3a86e9" }}>Xem tất cả</Text>
                </TouchableOpacity>
            </RowHeaderContent>

            {[1, 2, 3, 4, 5].map((e, key) => <View key={key}>
                <FriendItem
                    imgUrl={require('./../../public/img/fb_reg.png')}
                    imgMutual={require('./../../public/img/create_acc.png')}
                    requestName={"Nguyễn Thế Quang"}
                    requestTime={"18 tuần"}
                    numOfMutual={5}
                    type={'request'}
                />
            </View>
            )}

            <ShowAllButton
                onPress={onPressShowAll}
            >
                <Text>Xem tất cả</Text>
            </ShowAllButton>

            <CenterView>
                <Separator />
            </CenterView>

            <TitleContent>Những người bạn có thể biết</TitleContent>

            {[1, 2, 3, 4, 5].map((e, key) => <View key={key}>
                <FriendItem
                    imgUrl={require('./../../public/img/create_acc.png')}
                    imgMutual={require('./../../public/img/fb_reg.png')}
                    requestName={"Nguyễn Quang Linh"}
                    requestTime={""}
                    numOfMutual={17}
                    type={'suggest'}
                />
            </View>
            )}

        </ScrollView>
    );
}

export { FriendRequestTab };