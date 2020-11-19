import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreatePost = ({ navigation }) => {

    const sheetRef = useRef(null);
    const [enabledBottomClamp, setEnableBottomCamp] = useState(false);

    const renderContent = () => (
        <View
            style={{
                backgroundColor: '#fff8dc',
                padding: 20,
                height: 400,
            }}
        >
            <View >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="video-camera" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Tạo phòng họp mặt</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="image" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Ảnh/Video</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="smile-o" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Cảm xúc/Hoạt động</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="check-circle" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Check in</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="file-video-o" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Video trực tiếp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const onPressTextInput = () => {
        console.log('hello');
        setEnableBottomCamp(true);
    }

    return (
        <>
            <View style={styles.p1}>
                <Image
                    style={styles.picture}
                    source={
                        require('../../public/img/fb_reg.png')
                    }
                />
                <View style={styles.name}>
                    <Text style={{ fontWeight: 'bold', }}>Nguyễn Xuân Thành</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", borderColor: `#a9a9a9` }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9`, }}>Công khai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", marginLeft: 10, }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9` }}>+Album</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={onPressTextInput} style={styles.p2}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder="Bạn đang nghĩ gì?"
                    >
                    </TextInput>
                </ScrollView>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.p3}
                onPress={() => sheetRef.current.snapTo(0)}>
                <Text style={{ fontSize: 15, marginLeft: 10 }}>Thêm vào bài viết của bạn</Text>
                <View style={{ flexDirection: 'row', marginLeft: 90 }}>
                    <Icon name="video-camera" style={styles.icon_create_room}></Icon>
                    <Icon name="image" style={styles.icon_create_room}></Icon>
                    <Icon name="smile-o" style={styles.icon_create_room}></Icon>
                    <Icon name="check-circle" style={styles.icon_create_room}></Icon>
                </View>
            </TouchableOpacity>

            <BottomSheet
                ref={sheetRef}
                snapPoints={[400, 300, 0]}
                borderRadius={10}
                renderContent={renderContent}
                onCloseEnd={enabledBottomClamp}
            />



        </>
    )

}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,

    // },
    p1: {
        flex: 0.7,
        height: 75,
        width: 400,
        flexDirection: 'row',

    },

    picture: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderRadius: 25,
    },
    name: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'column'
    },
    p2: {
        flex: 6,
    },
    p3: {
        flex: 0.4,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: 'center',
        // marginLeft: 20,
        // backgroundColor: "blue",
    },
    input: {
        fontSize: 25,
    },
    icon_create_room: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        // marginLeft: 3,
        marginRight: 10,
    },
    icon_image: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        // marginLeft: 3,
        marginRight: 10,
    },
    icon_: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        // marginLeft: 3,
        marginRight: 10,
    },
    // create_room: {
    //     color: `#6495ed`,
    //     fontSize: 20,
    //     textAlignVertical: "center",
    //     // marginLeft: 3,
    //     marginRight: 10,
    // },



})



export { CreatePost };



