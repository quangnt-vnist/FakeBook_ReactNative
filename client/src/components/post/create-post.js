import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { pageName } from '../../navigator/constant.page'
import { GridImage } from './gridImage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CreatePost = ({ navigation }) => {

    const sheetRef = useRef(null);
    const [images, setImages] = useState([]);
    const [feeling, setFeeling] = useState("");


    const renderContent = () => (
        <View
            style={{
                backgroundColor: '#f8f8ff',
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
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={chooseFile}>
                    <Icon name="image" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Ảnh/Video</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPressFeeling}>
                    <Icon name="smile-o" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Cảm xúc/Hoạt động</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="check-circle" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Check in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
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

    const onPressFeeling = () => {
        navigation.navigate(pageName.post_feeling_activity)
    }

    const onPressTextInput = () => {
        console.log('hello');
        sheetRef.current.snapTo(2)
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Đăng" />
            ),
        });
    }, [navigation]);

    const chooseFile = () => {
        // let options = {
        //     title: 'Select Image',
        //     customButtons: [
        //         {
        //             name: 'customOptionKey',
        //             title: 'Choose Photo from Custom Option'
        //         },
        //     ],
        //     // storageOptions: {
        //     //     skipBackup: true,
        //     //     path: 'images',
        //     // },
        // };
        ImagePicker.showImagePicker((response) => {
            //  console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                );
                alert(response.customButton);
            } else {
                let source = response;
                console.log('sssssss', source.uri);
                setImages([...images, source.uri]);
                sheetRef.current.snapTo(2);
            }

        });
    };
    const onPressButtomSheet = () => {
        sheetRef.current.snapTo(1);
        Keyboard.dismiss();
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

            <View style={styles.p2}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder="Bạn đang nghĩ gì?"
                        onFocus={onPressTextInput}
                    >
                    </TextInput>


                    <View>
                        <GridImage
                            array={images}
                        />
                        {/* <Image source={{ uri: images[0] }} style={{ width: 300, height: 200 }} /> */}
                    </View>
                </ScrollView>
            </View>





            <TouchableOpacity
                style={styles.p3}
                onPress={onPressButtomSheet}>
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
    },
    input: {
        fontSize: 25,
        // backgroundColor: "blue",
    },
    img: {
        //  backgroundColor: "red",
        width: windowWidth,
        height: 300,

    },
    icon_create_room: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_image: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    // create_room: {
    //     color: `#6495ed`,
    //     fontSize: 20,
    //     textAlignVertical: "center",
    //     // marginLeft: 3,
    //     marginRight: 10,
    // },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
    },

})



export { CreatePost };



