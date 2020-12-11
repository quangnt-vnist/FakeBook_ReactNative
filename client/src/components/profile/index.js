import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../new-feed/feed';
import ToolBar from '../new-feed/toolBar';
import { SwipeImage } from './swipeImages';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = ({ navigation }) => {

    let [ShowComment, setShowModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);

    const onPressAvatar = () => {
        setanimateModal(true);
        setShowModelComment(true);
    }

    return (
        <>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image
                            style={styles.wall}
                            source={
                                require('../../public/img/barca_logo2.jpg')
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.avtframe}
                        onPress={onPressAvatar}
                    >
                        <Image
                            style={styles.avatar}
                            source={
                                require('../../public/img/avt2.jpg')
                            }
                        />
                    </TouchableOpacity>
                    {/* <View style={styles.camera}>

                    </View> */}
                    <Text style={styles.name}>Nguyễn Xuân Thành</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.addStory}>
                            <Text style={{ fontSize: 20, color: "#f8f8ff" }}>Thêm vào tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Text>...</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.lineStyle} />
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="graduation-cap" style={styles.icon}></Icon>
                        <Text style={styles.textProfile}>Học tại </Text>
                        <Text style={styles.textProfile1}>Đại học Bách Khoa Hà Nội</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="home" style={styles.icon}></Icon>
                        <Text style={styles.textProfile}>Sống tại </Text>
                        <Text style={styles.textProfile1}>Hà Nội</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="calendar-times-o" style={styles.icon}></Icon>
                        <Text style={styles.textProfile}>Tham gia vào tháng 3 năm 2016 </Text>
                        {/* <Text style={styles.textProfile1}>Hà Nội</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        {/* <Icon name="dots-three-horizontal" style={styles.icon}></Icon> */}
                        <Text style={styles.icon}>...</Text>
                        <Text style={styles.textProfile}>Xem thông tin giới thiệu của bạn</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.editProfile}>
                            <Text style={{ fontWeight: "bold", color: "#6a5acd", fontSize: 15 }}>Chỉnh sửa chi tiết công khai</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bạn bè</Text>
                        <Text style={{ fontSize: 18, marginLeft: 220, color: "#87cefa" }}>Tìm bạn bè</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/dali_mask.jpg')
                                    }
                                />
                                <Text>Hello</Text>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.editProfile}>
                        <Text style={{ fontWeight: "bold", color: "#6a5acd", fontSize: 15 }}>Xem chi tiết bạn bè</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigLineStyle} />
                <View style={{ marginTop: 10 }}>
                    <ToolBar navigation={navigation} />
                </View>
                <View style={styles.bigLineStyle} />
                <Feed />


            </ScrollView>
            <SwipeImage
                showComment={ShowComment}
                animeModal={animateModal}
            />
        </>
    )
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        // position: 'absolute',
        height: 450,
        // backgroundColor: "yellow",
    },
    wall: {
        marginTop: 10,
        width: 370,
        height: 240,
        borderRadius: 10,
        // zIndex: 1
    },
    avatar: {
        width: "95%",
        height: "95%",
        borderRadius: 100,
        position: 'absolute',
        //marginTop: 170,
        // backgroundColor: "red"
    },
    avtframe: {
        width: 180,
        height: 180,
        borderRadius: 90,
        position: 'absolute',
        marginTop: 150,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        position: 'absolute',
        backgroundColor: "red",
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 250,
        //marginLeft: 300,
    },
    name: {
        marginTop: 100,
        fontWeight: 'bold',
        fontSize: 30
    },
    addStory: {
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: `#00bfff`,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    more: {
        width: 50,
        height: 40,
        borderRadius: 10,
        backgroundColor: `#dcdcdc`,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dcdcdc',
        marginTop: 10,
    },
    bigLineStyle: {
        borderWidth: 5,
        borderColor: '#a9a9a9',
        marginTop: 10,
    },
    icon: {
        color: `#a9a9a9`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
        marginLeft: 10,
    },
    textProfile: {
        fontSize: 20
    },
    textProfile1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    editProfile: {
        width: 350,
        height: 40,
        backgroundColor: `#87cefa`,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 10,
    },
    paddingFriend: {
        flexDirection: "column",
        marginLeft: 20,
        marginTop: 10,
        // width: 120,
        // height: 120,
    },
    avatarFriend: {
        width: 100,
        height: 100,
        borderRadius: 10,
        // marginLeft: 20,
        // marginTop: 10,
    }

})

export { Profile }