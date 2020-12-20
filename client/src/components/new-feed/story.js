import React from 'react'

import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import Avatar from './avatar'
import { connect } from 'react-redux'

const Container = styled.View`
	width: 100%;
	height: 192px;
	flex-direction: row;
	align-items: center;
`
const Card = styled.View`
	width: 106px;
	height: 170px;
	position: relative;
	margin-right: 8px;
`
const CardStory = styled.Image`
	width: 100%;
	height: 170px;
	border-radius: 12px;
`
const CardUser = styled.View`
	position: absolute;
	top: 8px;
	left: 8px;
	background: #ffffff;
	border-radius: 20px;
	width: 39px;
	height: 39px;
	align-items: center;
	justify-content: center;
	border: 1px solid #ccc;
`
const CardFooter = styled.View`
	width: 100%;
	position: absolute;
	bottom: 12px;
	left: 9px;
`
const Text = styled.Text`
	font-size: 13px;
	font-weight: bold;
	color: #ffffff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Story = (props) => {
	const { auth } = props;

	return (
		<>
			<Container>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 11 }}>
					<Card>
						<CardStory
							// source={require('./../../public/img/assets/story1.jpg')}
							source={{ uri: `https://fakebook-server.herokuapp.com${auth.profile?.avatar}` }}
						/>
						<CardUser>
							<AntDesign
								name='plus'
								size={24}
								color='#1777f2'
							/>
						</CardUser>
						<CardFooter>
							<Text>Tạo tin</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('./../../public/img/assets/story2.jpg')}
						/>
						<CardUser>
							<Avatar
								source={require('./../../public/img/assets/user2.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Dzuyên NT</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('./../../public/img/assets/story3.jpg')}
						/>
						<CardUser>
							<Avatar
								source={require('./../../public/img/assets/user3.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Quang Dz</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('./../../public/img/assets/story4.jpg')}
						/>
						<CardUser>
							<Avatar
								source={require('./../../public/img/assets/user4.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Love Together</Text>
						</CardFooter>
					</Card>
				</ScrollView>
			</Container>
			<BottomDivider />
		</>
	)
}

const mapStateToProps = state => {
	const { auth } = state;
	return { auth };
}
const mapActions = {};

let connected = connect(mapStateToProps, mapActions)(Story);

export { connected as Story }

// export default Story
