import React, { useRef, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function NotificationTab(props) {
    const sheetRef = useRef(null);
    let [ShowComment, setModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);

    const onPressEditNoti = () => {
        // sheetRef.current.snapTo(0);
        // Keyboard.dismiss();
        console.log("click");
        setanimateModal(true);
        setModelComment(true)
    }
    const onPressDeleteNoti = () => {
        console.log("click delete");
        setanimateModal(false);
        setModelComment(false)
    }

    const onPressViewNoti = () => {
        console.log("he lo my fen");
    }
    const EditNotification = () => {
        return (
            <View style={{ backgroundColor: "#fff", height: 175, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <View style={{ alignItems: "center", borderBottomColor: "#CCC", borderBottomWidth: 1 }}>
                    <Image
                        source={require('./../../public/img/fb_reg.png')}
                        style={styles.avatarNoti}
                    />
                    <Text style={{ fontSize: 16, marginBottom: 10 }} >Linhdz đã thích hình ảnh của bạn</Text>
                </View>

                <TouchableWithoutFeedback
                    onPress={onPressDeleteNoti}
                >

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Icon2 name="bookmark-remove" style={styles.removeIcon}></Icon2>

                        <Text style={{ marginTop: 20, fontWeight: "700", fontSize: 16 }}>Gỡ thông báo này</Text>

                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    const SingleNotification = () => {
        return (
            <View style={[styles.singleNoti]}>
                <TouchableWithoutFeedback
                    onPress={onPressViewNoti}
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    {/* avatar */}
                    <Image
                        source={require('./../../public/img/fb_reg.png')}
                        style={styles.avatar}
                    />

                    <View style={styles.notiContent}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Ngọc Hân đã bình luận về một bài viết mà bạn đang theo dõi Linh dzvl</Text>
                        </View>
                        <Text style={{ color: "#555", fontSize: 14 }}>T3 lúc 19:34</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={onPressEditNoti}>
                    <Icon name="dots-three-horizontal" style={{ fontSize: 20, marginRight: 10, marginTop: 5 }}></Icon>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    return (
        <>
            <SingleNotification />
            <SingleNotification />
            <SingleNotification />
            <SingleNotification />
            <SingleNotification />
            <SingleNotification />
            <SingleNotification />

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
                        <View style={{ alignItems: "center", borderBottomColor: "#CCC", borderBottomWidth: 1 }}>
                            <Image
                                source={require('./../../public/img/fb_reg.png')}
                                style={styles.avatarNoti}
                            />
                            <Text style={{ fontSize: 16, marginBottom: 10 }} >Linhdz đã thích hình ảnh của bạn</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => { console.log("delete?") }}
                        >
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Icon2 name="bookmark-remove" style={styles.removeIcon}></Icon2>

                                <Text style={{ marginTop: 20, fontWeight: "700", fontSize: 16 }}>Gỡ thông báo này</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={{height: 1, backgroundColor: "#E2E7E7", width: "100%"}}></View>
                    </View>
                }
                ContentModalStyle={styles.Modal}

                onClose={() => {
                    setModelComment(false);
                    setanimateModal(false);
                }}
            />
        </>
    );

}



const styles = StyleSheet.create({
    singleNoti: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E7F3FF",
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
        marginTop: HEIGHT-200,
    },
    containerHeader: {
        display: "flex",
        marginTop: HEIGHT-270,
    },
    swipeDown: {
        display: "flex",
        textAlign: "center",
        fontSize: 50,
        height: 30,
        color: "#777"
    }


})

export { NotificationTab };