import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import { pageName } from "../../navigator/constant.page";
import { PostAction } from "../post/redux/action";
import { connect } from "react-redux";
import moment from 'moment'

const Comments = (props) => {

    const [show, setShow] = useState(false);
    const { route } = props;
    useEffect(() => {
        // props.getCommentPost("5fdef6b3c2916600170accfd");
        route?.params?.id && props.getCommentPost(route.params.id);
    }, [])

    useEffect(() => {
        if (props.post.isLoading === true) setShow(true);
    }, [props.post.isLoading, props.post?.comment])

    return (
        <>
            {show ?
                <CommentList {...props} style={{ backgroundColor: "#000", paddingTop: 100 }} />
                :
                <LoadingComments />
            }
        </>
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
    let height = "100%";
    let showLike = true;
    if (props.height) {
        height = props.height
    }
    if (props.showLike === false) showLike = props.showLike;

    const listCmt = props.post.comment ? props.post.comment : [];
    return (
        <View style={{ backgroundColor: "#fff", height: height }}>
            { showLike &&
                <View style={{ height: 50, borderBottomColor: "#DDD", borderBottomWidth: 1, borderTopColor: "#DDD", borderTopWidth: 1, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name="like1"
                            color="#204fb5"
                            size={20}
                            style={{ marginLeft: 10, marginRight: 10 }}
                        />
                        <Text style={{ fontWeight: "700" }}>100</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate(pageName.main.MAIN)}>
                            <Icon2
                                name="x"
                                color="#111"
                                size={20}
                                style={{ marginLeft: 300, marginRight: 10 }}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            }

            <FlatList
                showsVerticalScrollIndicator={false}
                data={listCmt}
                keyExtractor={item => item._id}
                renderItem={({ item }) =>
                    <View style={styles.singleComment}>

                        <Image
                            source={{ uri: `https://fakebook-server.herokuapp.com${item.creator.avatar}` }}
                            style={styles.avatar}
                        />

                        <View>
                            <View style={styles.contentCmt}>
                                <TouchableWithoutFeedback>
                                    <Text style={styles.userName}>{item.creator.name}</Text>
                                </TouchableWithoutFeedback>

                                <Text>{item.described}</Text>

                            </View>
                            <Text>{moment(item.createAt).fromNow()}</Text>
                        </View>
                    </View>}
            />
            <AddComment {...props} />
        </View >
    )
}

const AddComment = (props) => {
    const [content, setContent] = useState("");
    const submitAdd = () => {
        let data = {
            described: content
        }
        props.addCommentPost(props.route.params.id, data);
    }

    return (
        <View style={{ height: 50, borderTopColor: "#DDD", borderTopWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#EEE", borderRadius: 20, width: "80%", height: "80%" }}>
                <TextInput
                    placeholder="Viết bình luận..."
                    onChangeText={text => setContent(text)}
                    value={content}
                    onSubmitEditing={submitAdd}
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
const mapStateToProps = state => {
    const { post } = state;
    return { post };
}
const mapActions = {
    getCommentPost: PostAction.getCommentPost,
    addCommentPost: PostAction.addCommentPost,
}
let connected = connect(mapStateToProps, mapActions)(Comments);

export { connected as Comments }
// export { Comments }

