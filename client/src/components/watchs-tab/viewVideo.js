import React, { useEffect, useRef, useState } from 'react';

import { Dimensions } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components/native'
import Video from 'react-native-video';
import { Comments } from '../comment/comments';
import { ScrollView } from 'react-native-gesture-handler';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const VideoView = styled.View`
    flex: 1;
    display: flex;
    justifyContent: center;
    alignItems: center;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
`
const Footer = styled.View`
	padding: 0 11px;
`
const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`
const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const Button = styled.TouchableOpacity`
	flex-direction: row;
`
const Icon = styled.View`
	margin-right: 6px;
`
const Text = styled.Text`
	font-size: 12px;
	color: #424040;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 5px;
	background: #f0f2f5;
`

const ViewVideo = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#FFF"}}
        >
            {/* <VideoView > */}
            <Video
                controls
                // paused={true}
                // muted={true}
                repeat
                // source={{ uri: item.video }}
                source={item.video}
                resizeMode={'cover'}
                style={{
                    // flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width * (9 / 16),
                    backgroundColor: 'black',
                }}
            />
            {/* </VideoView> */}
            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign
                                name='like1'
                                size={12}
                                color='#FFFFFF'
                            />
                        </IconCount>
                        <TextCount>{item.numOfLike} likes</TextCount>
                    </Row>
                    <TextCount>{item.numOfCmt} comments</TextCount>

                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign
                                name='like2'
                                size={20}
                                color='#424040'
                            />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button
                        onPress={() => sheetRef.current.snapTo(0)}
                    >
                        <Icon>
                            <MaterialCommunityIcons
                                name='comment-outline'
                                size={20}
                                color='#424040'
                            />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons
                                name='share-outline'
                                size={20}
                                color='#424040'
                            />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <BottomDivider />
            {/* <Comments 
                showLike={false}
                height={HEIGHT - 300 - 10 - 10 - 35}
            /> */}
        </ScrollView>

    );
};

export default ViewVideo;