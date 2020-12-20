import React, { useEffect, useRef, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import { connect } from 'react-redux';
import { NotificationAction } from './redux/action';
import moment from 'moment'
import { pageName } from '../../navigator/constant.page';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function NotificationTab(props) {
    console.log("propsssssss", props.notification.notification);
    useEffect(() => {
        props.getNotification();
    }, [])

    const sheetRef = useRef(null);
    let [ShowComment, setModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);
    let [currentNoti, setCurrentNoti] = useState(-1);

    const onPressEditNoti = (index) => {
        setCurrentNoti(index);
        setModelComment(true);
    }

    const onPressDeleteNoti = (index) => {
        let { notification } = props.notification;

        setanimateModal(false);
        setModelComment(false)
        index !== -1 && notification && props.deleteNotification(notification[index]._id)

    }

    const onPressViewNoti = (id) => {
        id && props.editNotification(id);
        props.navigation.navigate(pageName.feed.SINGLE_POST, { id: id })
    }

    const SingleNotification = ({ item, index }) => {
        const convertType = (type) => {
            if (type === "Comment") return "bình luận về";
            else return "thích"
        }

        return (
            <View style={[styles.singleNoti]}>
                <TouchableWithoutFeedback
                    onPress={() => onPressViewNoti(item.post._id)}
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    {/* avatar */}
                    <Image
                        source={{ uri: `https://fakebook-server.herokuapp.com${item.from.avatar}` }}
                        style={styles.avatar}
                    />

                    <View style={styles.notiContent}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>{`${item.from.name} đã ${convertType(item.type)} bài viết của bạn`}</Text>
                        </View>
                        <Text style={{ color: "#555", fontSize: 14 }}>{`${moment(item.createdAt).format("DD-MM HH:mm")}`}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => onPressEditNoti(index)}>
                    <Icon name="dots-three-horizontal" style={{ fontSize: 20, marginRight: 10, marginTop: 5 }}></Icon>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: "#fff" }}>
            { props.notification?.notification?.map((item, index) => <View key={item._id}>
                <SingleNotification item={item} index={index} />
            </View>
            )}

            {/* <BottomSheet
                ref={sheetRef}
                snapPoints={[165, 165, 0]}
                borderRadius={10}
                enabledContentTapInteraction={false}
                renderContent={EditNotification}
                enabledManualSnapping={false}
            /> */}


            <SwipeUpDownModal
                modalVisible={ShowComment}
                PressToanimate={true}
                HeaderContent={
                    <View style={styles.containerHeader}>
                        <Icon3 name="minus" style={styles.swipeDown} />
                    </View>
                }
                ContentModal={
                    <View style={{ backgroundColor: "#fff", height: HEIGHT, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>


                        <TouchableOpacity
                            onPress={() => { onPressDeleteNoti(currentNoti) }}
                        >
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Icon2 name="bookmark-remove" style={styles.removeIcon}></Icon2>

                                <Text style={{ marginTop: 20, fontWeight: "700", fontSize: 16 }}>Gỡ thông báo này</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={{ height: 1, backgroundColor: "#E2E7E7", width: "100%" }}></View>
                    </View>
                }
                ContentModalStyle={styles.Modal}

                onClose={() => {
                    setModelComment(false);
                    setanimateModal(false);
                }}
            />
        </View>
    );

}



const styles = StyleSheet.create({
    singleNoti: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#E7F3FF",
        padding: 5
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        marginLeft: 5,

    },
    avatarNoti: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10,
        marginTop: 20,
    },
    notiContent: {
        width: "70%",
        marginRight: 10
    },
    removeIcon: {
        backgroundColor: "#DDD",
        padding: 5,
        borderRadius: 20,
        fontSize: 30,
        margin: 10
    },
    Modal: {
        marginTop: HEIGHT - 85,
    },
    containerHeader: {
        display: "flex",
        marginTop: HEIGHT - 155,
    },
    swipeDown: {
        display: "flex",
        textAlign: "center",
        fontSize: 50,
        height: 30,
        color: "#777"
    }


})
const mapStateToProps = state => {
    const { notification } = state;
    return { notification };
}
const mapActions = {
    getNotification: NotificationAction.getNotification,
    editNotification: NotificationAction.editNotification,
    deleteNotification: NotificationAction.deleteNotification,
}
let connected = connect(mapStateToProps, mapActions)(NotificationTab);

export { connected as NotificationTab }