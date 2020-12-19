import React, { Component, useRef, useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView,
    Dimensions, KeyboardAvoidingView
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;


const PreViewAvatar = ({ navigation, route }) => {
    //let images = route.params.images;
    //const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    let [images, setImages] = useState(route.params.images)
    //let [text, setT]
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 10 }}

                >
                    <Text>Lưu</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>Đến:</Text>
                <Icon style={{ fontSize: 20, marginLeft: 10 }} name="ios-earth" />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Công khai</Text>
            </View>
            <View>
                <Image
                    style={{ width: windowWidth, height: 400, backgroundColor: "red" }}
                    source={
                        { uri: images }
                    }
                />
            </View>
            <View style={styles.option}>
                <View style={styles.detailOption}>
                    <Icon style={{ fontSize: 20 }} name="time-outline" />
                    <Text style={{ fontSize: 20 }}>Để tạm thời</Text>
                </View>
                <View style={styles.detailOption}>
                    <Icon style={{ fontSize: 20 }} name="ios-hammer" />
                    <Text style={{ fontSize: 20 }}>Thêm khung</Text>
                </View>
            </View>
            <View >
                <TextInput
                    style={{ fontSize: 22 }}
                    placeholder="Hãy nói gì đó về ảnh đại diện của bạn..."
                    multiline={true}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    option: {
        flexDirection: "row",
        width: "100%",
        height: "8%",
        marginTop: 10,
        marginBottom: 10,
    },
    detailOption: {
        flexDirection: "row",
        backgroundColor: "#dcdcdc",
        width: "40%",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }
})

export { PreViewAvatar }