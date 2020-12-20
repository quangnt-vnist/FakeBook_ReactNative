import React, { useEffect, useRef, useState } from 'react';

import { ActivityIndicator, FlatList, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

import styled from 'styled-components/native'
import moment from 'moment'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import BottomSheet from 'reanimated-bottom-sheet';

import Avatar from './avatar'
import { Comments } from '../comment/comments'
import { pageName } from '../../navigator/constant.page';
import { connect } from 'react-redux';
import { GridImage } from '../post/gridImage';
import { PostAction } from '../post/redux/action';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Container = styled.View`
	flex: 1;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
`
const User = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 10px;
	color: #747476;
`
const Post = styled.Text`
	font-size: 14px;
	color: #222121;
	line-height: 18px;
	padding: 0 11px;
`
const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
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
	height: 9px;
	background: #f0f2f5;
`
function SinglePost(props) {
    const id = props.route.params.id;
    useEffect(() => {
        id && props.getPost(id);
    }, [])
    const post = props.post.singlePost;
    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            {post ? <View >

                <Header>
                    <Row>
                        <Avatar
                            source={{ uri: `https://fakebook-server.herokuapp.com${post.creator.avatar}` }}
                        />
                        <View style={{ paddingLeft: 10 }}>
                            <User>{post.creator.name}</User>
                            <Row>
                                <Time>{`${moment(post.created).fromNow()}`}</Time>
                                <Entypo
                                    name='dot-single'
                                    size={12}
                                    color='#747476'
                                />
                                <Entypo
                                    name='globe'
                                    size={10}
                                    color='#747476'
                                />
                            </Row>
                        </View>
                    </Row>
                    <TouchableOpacity onPress={() => props.navigation.navigate(pageName.report.REPORT_POST)}>
                        <Entypo
                            name='dots-three-horizontal'
                            size={15}
                            color='#222121'
                        />
                    </TouchableOpacity>
                </Header>

                <Post>
                    {post.described}
                </Post>
                {post.image.length > 0 && <GridImage array={post.image} />}

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
                            <TextCount>{post.like.length} likes</TextCount>
                        </Row>
                        <TextCount>{post.comment.length} comments</TextCount>

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
                            onPress={() => props.navigation.navigate(pageName.comment.COMMENT, { id: post._id })}
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

            </View>
                : <ActivityIndicator size="large" color="#ccc" />}
        </View>
    )

}

const mapStateToProps = state => {
    const { post } = state;
    return { post };
}
const mapActions = {
    getPost: PostAction.getPost,
}
let connected = connect(mapStateToProps, mapActions)(SinglePost);

export { connected as SinglePost }
