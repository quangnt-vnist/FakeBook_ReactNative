import React, { useEffect, useRef, useState } from 'react';

import { ActivityIndicator, FlatList, View, TouchableOpacity, Dimensions } from 'react-native'

import styled from 'styled-components/native'
import moment from 'moment'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
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


const wait = (timeout) => {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
}


const PostItem = (props) => {
	let item = props.item;
	return (
		<Container key={item.id}>
			<Header>
				<Row>
					<Avatar
						source={item.avatar}
					/>
					<View style={{ paddingLeft: 10 }}>
						<User>{item.name}</User>
						<Row>
							<Time>{item.time}</Time>
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
				{item.post}
			</Post>
			{/* { !(item.photo === "") && <Photo source={item.photo} />} */}
			{item.photo.length > 0 && <GridImage array={item.photo} />}

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
						onPress={() => props.navigation.navigate(pageName.comment.COMMENT)}
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
		</Container>
	)
}

const LoadingPost = (props) => {
	const { post } = props;
	let { isLoading, listPost } = post;

	let checkShowLoading = true;
	if (isLoading === false && listPost.length !== 0) {
		checkShowLoading = false;
	}

	return (
		<View>
			{checkShowLoading ?
				<View
					style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT / 3 }}
				>
					<ActivityIndicator
						size="large"
						color="#747476"
					/>
					<Text style={{ fontSize: 30, fontWeight: "700", color: "#747476" }}>Loading ...</Text>
				</View> :
				<View
					style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT / 3 }}
				>
					<MaterialIcons
						name='error-outline'
						size={50}
						color='#747476'
					/>
					<Text style={{ fontSize: 30, fontWeight: "700", color: "#747476" }}>Chưa có bài viết nào</Text>
				</View>
			}
		</View>
	)
}

const Feed = (props) => {

	const { auth, post } = props;

	// useEffect(() => {
	// 	console.log('render',post.isLoadingPost);
	// 	props.getPostByUser();
	// 	props.getAllPost();
	// }, [post.post?._id])

	let listPost = [], allPost = [], myPost = [];
	let a = {
		"__v": 0,
		"_id": "5fdddcde1cf5ff00176648a6",
		"comment": [
			"Array"
		],
		"created": "2020-12-19T10:58:38.598Z",
		"creator": [
			"Object"
		],
		"described": "aefhihe",
		"image": [
			"Array"
		],
		"like": [
			"Array"
		],
		"reported": [
			"Array"
		]
	}
	if (post.listPost.length > 0) {
		allPost = post.listPost.map(e => {
			return {
				id: e._id,
				comment: e.comment,
				avatar: { uri: `https://fakebook-server.herokuapp.com${e?.creator?.avatar}` },
				name: e?.creator?.name,
				post: e.described,
				time: moment(e.created).fromNow(),
				photo: e.image,
				video: "",
				numOfLike: e.like?.length,
				numOfCmt: e.comment?.length,
			}
		})
	}
	if (post.myPost.length > 0) {
		myPost = post.myPost.map(e => {
			return {
				id: e._id,
				comment: e.comment,
				avatar: { uri: `https://fakebook-server.herokuapp.com${e?.creator?.avatar}` },
				name: e?.creator?.name,
				post: e.described,
				time: moment(e.createAt).fromNow(),
				photo: e.image,
				video: "",
				numOfLike: e.like?.length,
				numOfCmt: e.comment?.length,
			}
		})
	}

	listPost = allPost;

	if (props.isProfile) {
		listPost = myPost;
	}

	const listPost2 = [
		{
			id: "1",
			avatar: require('./../../public/img/assets/user1.jpg'),
			name: "Phạm Tuấn Anh",
			post: "Tiên tửu, thần cồn, ma men Tuấn Anh tìm đối thủ. @@",
			time: "6 giờ",
			photo: require('./../../public/img/assets/post1.jpg'),
			video: "",
			numOfLike: 98,
			numOfCmt: 17,
		},
		{
			id: "2",
			avatar: require('./../../public/img/assets/user2.jpg'),
			name: "Nguyễn Quang Linh",
			post: "Nguyễn LInh Phù Ninh",
			time: "4 giờ",
			photo: "",
			video: "",
			numOfLike: 28,
			numOfCmt: 17,
		},
		{
			id: "3",
			avatar: require('./../../public/img/assets/user3.jpg'),
			name: "Xuân Thành",
			post: "Nghe nói Tuấn Anh thích uống rượu",
			time: "5 giờ",
			photo: require('./../../public/img/assets/post2.jpg'),
			video: "",
			numOfLike: 18,
			numOfCmt: 17,
		},
		{
			id: "4",
			avatar: require('./../../public/img/assets/user4.jpg'),
			name: "Nguyễn Thế Quang",
			post: "QuangDz",
			time: "5 giờ",
			photo: "",
			video: "",
			numOfLike: 18,
			numOfCmt: 17,
		},

	];

	const [state, setState] = useState({
		listPost: listPost,
		loadingItem: false,
	});


	const handleLoadMore = () => {
		setState({
			...state,
			loadingItem: true,
		});
		console.log('start');

		// check data return isLoading === false;
		wait(2000).then(() => {
			console.log('end');
			setState({
				...state,
				loadingItem: false,
			});
		});
	};

	return (
		<>
			{post.isLoadingPost && <View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text>Đang đăng bài viết...</Text>
				<ActivityIndicator size="large" color="#ccc" />	
			</View>}
			<View>
				{listPost.length !== 0 ? listPost.map(item => <View key={item.id}>
					<PostItem item={item} {...props} />
				</View>) : <LoadingPost {...props} />
				}
			</View>

			{/* <FlatList
				data={listPost}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <PostItem item={item} />}
				ListFooterComponent={() => {
					if (!state.loadingItem) return null;
					return (
						<ActivityIndicator
							size={'large'}
							color={"#ccc"}
						/>
					)
				}}
				// onEndReachedThreshold={0.4}
				// onEndReached={() => handleLoadMore()}
			/> */}
		</>
	)
}


const mapStateToProps = state => {
	const { auth, post } = state;
	return { auth, post };
}
const mapActions = {
	getAllPost: PostAction.getAllPost,
	getPostByUser: PostAction.getPostByUser,
};

let connected = connect(mapStateToProps, mapActions)(Feed);

export { connected as Feed }

// export { Feed }
