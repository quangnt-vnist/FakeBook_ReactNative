import React, { useEffect, useRef, useState } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native'

import styled from 'styled-components/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';

import Avatar from './avatar'
import { Comments } from '../comment/comments'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const CommentSheet = () => {
	return (
		<Comments />
	)
}

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

				<Entypo
					name='dots-three-horizontal'
					size={15}
					color='#222121'
				/>
			</Header>

			<Post>
				{item.post}
			</Post>
			{ !(item.photo === "") && <Photo source={item.photo} />}

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

					{/* <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)} >
								<Icon>
									<MaterialCommunityIcons
										name='comment-outline'
										size={20}
										color='#424040'
									/>
								</Icon>
								<Text> Bình luận</Text>
							</TouchableOpacity> */}
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
		</Container>
	)
}

const Feed = () => {
	const sheetRef = useRef(null);
	const [enabledBottomClamp, setEnableBottomCamp] = useState(false);

	const listPost = [
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
		{ listPost.map(item => <View key={item.id}>
			<PostItem item={item} /> 
		</View>		
		)}
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
			{/* <BottomSheet
				ref={sheetRef}
				snapPoints={["80%", "50%", "0%"]}
				borderRadius={10}
				renderContent={CommentSheet}
				onCloseEnd={enabledBottomClamp}
			/> */}
		</>
	)
}

export default Feed
