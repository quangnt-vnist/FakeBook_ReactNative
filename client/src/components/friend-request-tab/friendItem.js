import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 110px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin: 10px 0;
`

const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`

const Avatar = styled.Image`
    width: 25%;
    height: 95%;
    margin: 0 5px 0 0;
    border-radius: 50px;
    background-color: green;
`

const RightContent = styled.TouchableOpacity`
    width: 75%;
    height: 100px;
    padding: 0 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const RowTitle = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

const NameTitle = styled.Text`
    font-weight: 700;
    font-size: 20px;
`

const RowMutual = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`

const MutualFriendAvt = styled.Image`
    width: 20px;
    height: 20px;
    margin: 0 5px 0 0;
    border-radius: 50px;
    background-color: green;
`

const RowButton = styled.View`
    margin: 10px 0;
    width: 100%;
    align-items: center;
    flex-direction: row;   
`

const ButtonAccept = styled.TouchableOpacity`
    width: 48%;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 10px 0 0;
    background-color: #1578EF;
`

const ButtonCancel = styled.TouchableOpacity`
    width: 48%;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #E2E7E7
`


const FriendItem = (props) => {
    return (
        <Container>
            <Avatar
                source={props.imgUrl}
            />
            <RightContent>
                <RowTitle>
                    <NameTitle>{props.requestName}</NameTitle>
                    <Text>{props.requestTime}</Text>
                </RowTitle>
                <RowMutual>
                    <MutualFriendAvt
                        source={props.imgMutual}
                    />
                    <Text>{props.numOfMutual} bạn chung</Text>
                </RowMutual>
                {props.type === "request" ?
                    <RowButton>
                        <ButtonAccept>
                            <Text style={{ color: "#fff" }}>Chấp nhận</Text>
                        </ButtonAccept>
                        <ButtonCancel>
                            <Text>Xóa</Text>
                        </ButtonCancel>
                    </RowButton> :
                    <RowButton>
                        <ButtonAccept>
                            <Text style={{ color: "#fff" }}>Thêm bạn bè</Text>
                        </ButtonAccept>
                        <ButtonCancel>
                            <Text>Gỡ</Text>
                        </ButtonCancel>
                    </RowButton>

                }

            </RightContent>
        </Container>
    );
}

export { FriendItem };