import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

const ListWatch = (props) => {



    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color="#ccc" />
                        <Text style={styles.modalText}>Is loading ...</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        opacity: 0.3,
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ListWatch;


// import React, { useEffect, useRef, useState } from 'react';

// import { ActivityIndicator, Dimensions, FlatList, View } from 'react-native'

// import styled from 'styled-components/native'
// import Video from 'react-native-video';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import BottomSheet from 'reanimated-bottom-sheet';

// import Avatar from '../new-feed/avatar'
// import { Comments } from '../comment/comments'
// import { pageName } from '../../navigator/constant.page';


// // Calculate window size
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

// const Container = styled.View`
// 	flex: 1;
// `
// const Header = styled.View`
// 	height: 50px;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: space-between;
// 	margin-top: 6px;
// 	padding: 0 11px;
// `
// const Row = styled.View`
// 	align-items: center;
// 	flex-direction: row;
// `
// const User = styled.Text`
// 	font-size: 14px;
// 	font-weight: bold;
// 	color: #222121;
// `
// const Time = styled.Text`
// 	font-size: 10px;
// 	color: #747476;
// `
// const Post = styled.Text`
// 	font-size: 14px;
// 	color: #222121;
// 	line-height: 18px;
// 	padding: 0 11px;
// `
// const Photo = styled.Image`
// 	margin-top: 9px;
// 	width: 100%;
// 	height: 300px;
// `

// const VideoView = styled.TouchableOpacity`
//     margin-top: 9px;
// 	display: flex;
//     justifyContent: center;
//     alignItems: center;
// `
// const Footer = styled.View`
// 	padding: 0 11px;
// `
// const FooterCount = styled.View`
// 	flex-direction: row;
// 	justify-content: space-between;
// 	padding: 9px 0;
// `
// const IconCount = styled.View`
// 	background: #1878f3;
// 	width: 20px;
// 	height: 20px;
// 	border-radius: 10px;
// 	align-items: center;
// 	justify-content: center;
// 	margin-right: 6px;
// `
// const TextCount = styled.Text`
// 	font-size: 11px;
// 	color: #424040;
// `
// const Separator = styled.View`
// 	width: 100%;
// 	height: 1px;
// 	background: #f9f9f9;
// `
// const FooterMenu = styled.View`
// 	flex-direction: row;
// 	justify-content: space-between;
// 	padding: 9px 0;
// `
// const Button = styled.TouchableOpacity`
// 	flex-direction: row;
// `
// const Icon = styled.View`
// 	margin-right: 6px;
// `
// const Text = styled.Text`
// 	font-size: 12px;
// 	color: #424040;
// `
// const BottomDivider = styled.View`
// 	width: 100%;
// 	height: 9px;
// 	background: #f0f2f5;
// `

// const CommentSheet = () => {
//     return (
//         <Comments />
//     )
// }
// const ListWatch = (props) => {
//     const sheetRef = useRef(null);
//     const [enabledBottomClamp, setEnableBottomCamp] = useState(false);

//     const listPost = [
//         {
//             id: "1",
//             avatar: require('./../../public/img/assets/user1.jpg'),
//             name: "Funny animal",
//             post: "Animal beer and fish",
//             time: "6 giờ",
//             photo: require('./../../public/img/assets/post1.jpg'),
//             video: "https://www.w3schools.com/html/movie.mp4",
//             numOfLike: 98,
//             numOfCmt: 17,
//         },
//         {
//             id: "2",
//             avatar: require('./../../public/img/assets/user2.jpg'),
//             name: "Gấu",
//             post: "Nguyễn LInh Phù Ninh",
//             time: "4 giờ",
//             photo: "",
//             video: "https://www.w3schools.com/html/mov_bbb.mp4",
//             numOfLike: 28,
//             numOfCmt: 17,
//         },
//         {
//             id: "3",
//             avatar: require('./../../public/img/assets/user3.jpg'),
//             name: "Mèo",
//             post: "",
//             time: "5 giờ",
//             photo: require('./../../public/img/assets/post2.jpg'),
//             video: "https://www.w3schools.com/html/movie.mp4",
//             numOfLike: 18,
//             numOfCmt: 17,
//         },
//         {
//             id: "4",
//             avatar: require('./../../public/img/assets/user4.jpg'),
//             name: "Chó",
//             post: "Chó chó",
//             time: "5 giờ",
//             photo: "",
//             video: "https://www.w3schools.com/html/mov_bbb.mp4",
//             // video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//             numOfLike: 18,
//             numOfCmt: 17,
//         },

//     ];

//     const onPressView = (item) => {
//         // console.log('item', item);
//         props.navigation.navigate(pageName.watch_tab.PLAY_VIDEO, { item })
//     }

//     return (
//         <>
//             <View>
//                 <ActivityIndicator />
//                 <ActivityIndicator size="large" color="#ccc" />
//                 <ActivityIndicator size="small" color="#0000ff" />
//                 <ActivityIndicator size="large" color="#00ff00" />
//             </View>
//             <FlatList
//                 data={listPost}
//                 keyExtractor={item => item.id}
//                 renderItem={({ item }) => <Container >
//                     <Header>
//                         <Row>
//                             <Avatar
//                                 source={item.avatar}
//                             />
//                             <View style={{ paddingLeft: 10 }}>
//                                 <User>{item.name}</User>
//                                 <Row>
//                                     <Time>{item.time}</Time>
//                                     <Entypo
//                                         name='dot-single'
//                                         size={12}
//                                         color='#747476'
//                                     />
//                                     <Entypo
//                                         name='globe'
//                                         size={10}
//                                         color='#747476'
//                                     />
//                                 </Row>
//                             </View>
//                         </Row>

//                         <Entypo
//                             name='dots-three-horizontal'
//                             size={15}
//                             color='#222121'
//                         />
//                     </Header>

//                     <Post>
//                         {item.post}
//                     </Post>
//                     {/* <Video source={{uri: "https://www.youtube.com/watch?v=hzEAelDDcmE"}}  // Can be a URL or a local file.
//                     /> */}
//                     {/* <Video source={require("./../")}  // local file.
//                     /> */}
//                     <VideoView
//                         onPress={() => onPressView(item)}
//                     >
//                         <Video
//                             // controls
//                             paused={true}
//                             muted={true}
//                             repeat={false}
//                             source={{ uri: item.video }}
//                             resizeMode={'cover'}
//                             style={{
//                                 width: Dimensions.get('window').width,
//                                 height: Dimensions.get('window').width * (9 / 16),
//                                 backgroundColor: 'black',
//                             }}
//                         />
//                     </VideoView>

//                     {/* { !(item.photo === "") && <Photo source={item.photo} />} */}

//                     <Footer>
//                         <FooterCount>
//                             <Row>
//                                 <IconCount>
//                                     <AntDesign
//                                         name='like1'
//                                         size={12}
//                                         color='#FFFFFF'
//                                     />
//                                 </IconCount>
//                                 <TextCount>{item.numOfLike} likes</TextCount>
//                             </Row>
//                             <TextCount>{item.numOfCmt} comments</TextCount>

//                         </FooterCount>

//                         <Separator />

//                         <FooterMenu>
//                             <Button>
//                                 <Icon>
//                                     <AntDesign
//                                         name='like2'
//                                         size={20}
//                                         color='#424040'
//                                     />
//                                 </Icon>
//                                 <Text>Like</Text>
//                             </Button>

//                             <Button
//                                 onPress={() => sheetRef.current.snapTo(0)}
//                             >
//                                 <Icon>
//                                     <MaterialCommunityIcons
//                                         name='comment-outline'
//                                         size={20}
//                                         color='#424040'
//                                     />
//                                 </Icon>
//                                 <Text>Comment</Text>
//                             </Button>

//                             <Button>
//                                 <Icon>
//                                     <MaterialCommunityIcons
//                                         name='share-outline'
//                                         size={20}
//                                         color='#424040'
//                                     />
//                                 </Icon>
//                                 <Text>Share</Text>
//                             </Button>
//                         </FooterMenu>
//                     </Footer>
//                     <BottomDivider />
//                 </Container>
//                 }
//             />
//         </>
//     )
// }

// export default ListWatch
