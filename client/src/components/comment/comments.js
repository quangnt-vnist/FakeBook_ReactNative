import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

const Comments = ({ navigation }) => {
    // const [loading, setLoading] = useState(true)

    // const sheetRef = useRef(null);
    // const [enabledBottomClamp, setEnableBottomCamp] = useState(false);

    // const onPressTextInput = () => {
    //     setEnableBottomCamp(enabledBottomClamp => enabledBottomClamp = !enabledBottomClamp);

    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500)
    // }, [])

    return (
        // <View style={{ height: "100%", backgroundColor: "#999" }}>

        //     <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)} style={styles.p2}>
        //         <Text
        //             style={styles.input}
        //         > Xem binh luan
        //         </Text>
        //     </TouchableOpacity>

        //     <BottomSheet
        //         ref={sheetRef}
        //         snapPoints={["80%", "50%", "0%"]}
        //         borderRadius={10}
        //         renderContent={loading ? LoadingComments : CommentList}
        //         onCloseEnd={enabledBottomClamp}
        //     />
        // </View>
        <CommentList />
    )

}

const LoadingComment = (props) => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={80}
        viewBox="0 0 400 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#d5d2d2"
        {...props}
    >
        <Rect x="80" y="10" rx="25" ry="50" width="300" height="60" />
        <Circle cx="40" cy="40" r="30" />
    </ContentLoader>
)

const LoadingComments = () => {
    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <View style={{ height: 50, borderBottomColor: "#DDD", borderBottomWidth: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="like1"
                        color="#204fb5"
                        size={20}
                        style={{ marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{ fontWeight: "700" }}>100</Text>
                </View>
            </View>
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <View style={{ height: 25 }}></View>
            <AddComment />

        </View>
    )
}

const CommentList = (props) => {
    const listCmt = [
        {
            id: "1",
            avatar: "",
            name: "Linh",
            content: "cmt 111111111111",
            time: "1 giờ",
        },
        {
            id: "2",
            avatar: "",
            name: "Linhdz",
            content: "comment comment comment comment comment comment",
            time: "2 giờ",
        },
        {
            id: "3",
            avatar: "",
            name: "Linh2",
            content: "comment comment comment ",
            time: "6 giờ",
        },
        {
            id: "4",
            avatar: "",
            name: "Linhs",
            content: "comment comment comment comment ",
            time: "2 giờ",
        }
    ];

    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <View style={{ height: 50, borderBottomColor: "#DDD", borderBottomWidth: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="like1"
                        color="#204fb5"
                        size={20}
                        style={{ marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{ fontWeight: "700" }}>100</Text>
                </View>
            </View>
            {
                listCmt.length >= 20 ?
                    <View style={styles.moreComments}>
                        <TouchableWithoutFeedback>
                            <Text style={styles.userName}>Xem các bình luận trước...</Text>
                        </TouchableWithoutFeedback>
                    </View> : null
            }

            {/* Comment list */}
            <FlatList
                data={listCmt}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={styles.singleComment}>

                        {/* avatar */}
                        <Image
                            source={require('./../../public/img/fb_reg.png')}
                            style={styles.avatar}
                        />

                        {/* comment's body */}
                        <View>
                            <View style={styles.contentCmt}>
                                <TouchableWithoutFeedback>
                                    <Text style={styles.userName}>{item.name}</Text>
                                </TouchableWithoutFeedback>

                                <Text>{item.content}</Text>

                            </View>
                            <Text>{item.time}</Text>
                        </View>
                    </View>}
            />
            <AddComment />
        </View>
    )
}

const AddComment = () => {
    return (
        <View style={{ height: 50, borderTopColor: "#DDD", borderTopWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#EEE", borderRadius: 20, width: "80%", height: "80%" }}>
                <TextInput
                    placeholder="Viết bình luận..."
                    style={{ marginLeft: 10, width: 260 }}
                />
                <Icon2
                    name="smile"
                    color="#888"
                    size={20}
                    style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,

    },

    bottomSheet: {
        borderRadius: 10,
        backgroundColor: "yellow"
    },

    singleComment: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingBottom: 10,
        paddingTop: 10,
    },

    contentCmt: {
        maxWidth: "80%",
        backgroundColor: "#EEE",
        padding: 10,
        borderRadius: 20
    },

    userName: {
        fontWeight: "700",
        minWidth: "80%"
    },

    moreComments: {
        paddingLeft: 10,
        paddingTop: 10,
    }

})

export { Comments }

