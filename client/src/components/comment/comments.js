import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { CommonStyle } from '../sign-up/commonStyle'
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
        <View style={{ backgroundColor: "#fff" }}>
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
            <LoadingComment />
        </View>
    )
}
const Comment = (props) => {
    return (
        <View style={{ backgroundColor: "#fff" }}>
            {/* avatar */}
            <Image
                source={require('./../../public/img/fb_reg.png')}
                style={styles.avatar}
            />

            <View>
                <TouchableWithoutFeedback>
                    <Text>User</Text>
                </TouchableWithoutFeedback>

                <Text>I am a comment</Text>

            </View>
        </View>
    )
}

const Comments = () => {
    return (

        <View style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[CommonStyle.submitBtn, { backgroundColor: "#fff" }]}
            // onPress={onPressBtnNext}
            >
                <Text style={[CommonStyle.textBtn, { color: "#000" }]}>Xem cac binh luan truoc...</Text>

            </TouchableOpacity>
            <Comment />
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
    }
})

export { Comments }

