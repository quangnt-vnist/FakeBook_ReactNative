import React, { useRef, useState } from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { OptionFriendModal } from './optionFriendModal';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

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

    const sheetRef = useRef(null);
    let [ShowComment, setModelComment] = useState(false);
    let [animateModal, setAnimateModal] = useState(false);

    const showOption = () => {
        console.log("click show");
        setAnimateModal(true);
        setModelComment(true)
    }

    return (
        <Container>
            <Avatar
                source={props.srcAvt}
            />
            <RightContent>
                <RowTitle>
                    <NameTitle>{props.friendName}</NameTitle>
                    <TouchableOpacity
                        onPress={showOption}
                    >
                        <Icon name={"ios-ellipsis-horizontal"} size={20} />
                    </TouchableOpacity>
                </RowTitle>
                <Text>{props.numOfMutual} bạn chung</Text>
            </RightContent>

            <SwipeUpDownModal
                modalVisible={ShowComment}
                PressToanimate={true}
                HeaderContent={
                    <View style={[styles.containerHeader, {color: "#777"}]}>
                        <Icon3 name="minus" style={styles.swipeDown} />
                    </View>
                }
                ContentModal={ <OptionFriendModal key={props.id}/> }
                ContentModalStyle={styles.Modal}

                onClose={() => {
                    setModelComment(false);
                    setAnimateModal(false);
                }}
            />

        </Container>


    );
};


const styles = StyleSheet.create({
    Modal: {
        marginTop: (HEIGHT-330),
    },
    containerHeader: {
        display: "flex",
        marginTop: (HEIGHT-400),
    },
    swipeDown: {
        display: "flex",
        textAlign: "center",
        fontSize: 50,
        height: 30,
        color: "#777"
    }
})
export { MyFriend };