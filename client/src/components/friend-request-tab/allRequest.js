import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FriendItem } from './friendItem';

import styled from 'styled-components/native';


const Row = styled.View`
	align-items: center;
	flex-direction: row;
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

function AllRequest(props) {
    return (
        <ScrollView
            style={{backgroundColor: "#fff"}}
            showsVerticalScrollIndicator={false}
        >
            <RowHeaderContent>
                <Row>
                    <TitleContent>Lời mời kết bạn</TitleContent>
                    <TitleContent style={{ color: "#ED2946" }}>36</TitleContent>
                </Row>
            </RowHeaderContent>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,].map((e, key) => <View key={key}>
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
        </ScrollView>
    );
}

export { AllRequest };