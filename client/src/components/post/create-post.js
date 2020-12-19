import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import VideoPlayer from 'react-native-video-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pageName } from '../../navigator/constant.page'
import { GridImage } from './gridImage';
import Emoji from 'react-native-emoji';
import { Draft } from './draft';

const windowWidth = Dimensions.get('window').width;
const CreatePost = ({ navigation, route }) => {

    const sheetRef = useRef(null);
    const sheetDraft = useRef(null);
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);
    const [mediaStatus, setMediaStatus] = useState(null);
    const [feeling, setFeeling] = useState({
        title: "",
        icon: "",
        type: "",
    });

    const onGoBack = () => {
        console.log('bacccccccccc');
        if (images.length > 0) {
            sheetDraft.current.snapTo(0);
        }
        else {
            console.log('backkkkkkkk');
            navigation.goBack();
        }
    }
    React.useEffect(() => {
        if (route.params) {
            setFeeling({
                title: route.params.status,
                icon: route.params.icon,
                type: 1,
            })
        }
    }, [route.params]);
    // console.log('routtt', route.params);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => (onGoBack)}
                />
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text>go back</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
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
        sheetRef.current.snapTo(2)
    }

    let imageGrid = null;
    console.log('aaaa', textAlignVertical);
    if (mediaStatus === 'image') {
        gridImages = (
            <View>
                <View style={styles.gridImagesViewLine}>
                    <View style={styles.gridImagesViewView}>
                        <Image
                            source={images[0]}
                            style={styles.gridImagesImage}
                        />
                        <View style={styles.gridImagesViewIcon}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (images.length === 1) {
                                        setMediaStatus(null);
                                        setImages([]);
                                    } else {
                                        const newImages = [...images];
                                        newImages.splice(0, 1);
                                        setImages(newImages);
                                    }
                                }}
                            >
                                <Ionicons name="close" color="red" size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.gridImagesViewView}>
                        {images[1] ? (
                            <>
                                <Image
                                    source={images[1]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(1, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                </View>
                <View style={styles.gridImagesViewLine}>
                    <View style={styles.gridImagesViewView}>
                        {images[2] ? (
                            <>
                                <Image
                                    source={images[2]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(2, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                    <View style={styles.gridImagesViewView}>
                        {images[3] ? (
                            <>
                                <Image
                                    source={images[3]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(3, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                </View>
            </View>
        );
    }
    const chooseFile = () => {
        ImagePicker.showImagePicker({
            title: 'Ảnh/Video',
            mediaType: 'mixed',
            takePhotoButtonTitle: null,
            chooseFromLibraryButtonTitle: null,
            customButtons: [
                {
                    name: 'myPhotoFromCamera',
                    title: 'Chụp ảnh',
                },
                {
                    name: 'myVideoFromCamera',
                    title: 'Quay video',
                },
                {
                    name: 'mylibrary',
                    title: 'Thư viện',
                },
            ],
        }, (response) => {
            if (response.customButton) {
                if (images.length >= 4) {
                    // eslint-disable-next-line no-alert
                    alert('Hệ thống cho phép đăng tải tối đa 4 ảnh!');
                    return;
                }
                if (mediaStatus === 'video') {
                    // eslint-disable-next-line no-alert
                    alert('Hệ thống cho phép đăng tải tối đa 1 video!');
                    return;
                }
            }
            if (response.customButton === 'myPhotoFromCamera') {
                ImagePicker.launchCamera({
                    storageOptions: {
                        path: 'PhotoCamera',
                    },
                    mediaType: 'photo',
                }, (myResponse) => {
                    if (myResponse.didCancel) {

                    } else if (myResponse.error) {

                    } else {
                        if (!mediaStatus) {
                            setMediaStatus('image');
                        }
                        const source = { uri: myResponse.uri };
                        setImages([...images, source]);
                    }
                });
            } else if (response.customButton === 'myVideoFromCamera') {
                if (mediaStatus === 'image') {
                    // eslint-disable-next-line no-alert
                    alert('Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!');
                    return;
                }
                ImagePicker.launchCamera({
                    storageOptions: {
                        path: 'VideoCamera',
                    },
                    mediaType: 'video',
                }, (myResponse) => {
                    if (myResponse.didCancel) {

                    } else if (myResponse.error) {

                    } else {
                        const source = { uri: myResponse.uri };
                        setMediaStatus('video');
                        setVideo(source);
                        console.log('Error at upload video type 1:', myResponse.errorMessage);
                    }
                });
            } else if (response.customButton === 'mylibrary') {
                ImagePicker.launchImageLibrary({
                    storageOptions: {
                        path: 'library',
                    },
                    mediaType: 'mixed',
                }, (myResponse) => {
                    if (myResponse.didCancel) {

                    } else if (myResponse.error) {

                    } else {
                        const source = { uri: myResponse.uri };
                        const type = myResponse.type;
                        if (!mediaStatus) {
                            if (type === 'image/jpeg') {
                                setMediaStatus('image');
                                setImages([source]);
                            } else {
                                setMediaStatus('video');
                                setVideo(source);
                                console.log('Error at upload video type 2:', myResponse.errorMessage);
                            }
                        } else {
                            if (type === 'image/jpeg') {
                                setImages([...images, source]);
                            } else {
                                // eslint-disable-next-line no-alert
                                alert('Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!');
                            }
                        }
                    }
                });
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
                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: 'bold', }}>Nguyễn Xuân Thành</Text>
                            <View style={{ flexDirection: "row" }}>
                                {feeling.title ?
                                    <Text> - Đang</Text> : <></>}
                                <Emoji name={feeling.icon ? feeling.icon : "kissing_heart"} style={{ fontSize: 20 }} />
                                {feeling.title ?
                                    <Text>{feeling.type === 1 ? "Cảm thấy" : ""}</Text> : <></>}
                            </View>
                        </View>
                        <Text style={{ fontWeight: "bold" }}>{feeling.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {/* <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", borderColor: `#a9a9a9` }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9`, }}>Công khai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", marginLeft: 10, }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9` }}>+Album</Text>
                        </TouchableOpacity> */}
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
                        value={text}
                        onChangeText={(text) => setText(text)}
                    >
                    </TextInput>


                    <View>

                        {mediaStatus === 'image' && gridImages}
                        {mediaStatus === 'video' && (<VideoPlayer
                            video={video}
                            videoWidth={1600}
                            videoHeight={900}
                        />)}
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
            {/* <BottomSheet
                ref={sheetDraft}
                snapPoints={[200, 0]}
                borderRadius={10}
                renderContent={renderContent}
            /> */}

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
        flexDirection: 'row',
        // backgroundColor: ,
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


    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
    },
    delete: {
        position: 'absolute',
        // backgroundColor: "red",
        alignSelf: "flex-end",
        width: 30,
        height: 30,
        marginTop: 10,
        marginRight: 15,
    },
    icon_delete: {
        fontSize: 30,
        color: "#dcdcdc",
    },
    gridImagesViewLine: {
        flexDirection: 'row',
    },
    gridImagesViewView: {
        flexBasis: 1,
        flexGrow: 1,
        padding: 3,
    },
    gridImagesImage: {
        height: windowWidth / 2 - 6,
        resizeMode: 'cover',
        width: '100%',
    },
    gridImagesViewIcon: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        right: 10,
        top: 10,
    },

})



export { CreatePost };



