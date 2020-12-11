import React from 'react';
import { View, ScrollView } from 'react-native';
import { FriendItem } from './friendItem';

import styled from 'styled-components/native';

const TitleContent = styled.Text`
    margin: 0 0 0 10px;
    font-size: 22px;
    font-weight: 700;
`

function SuggestFriend(props) {
    return (
        <ScrollView
            style={{backgroundColor: "#fff"}}
            showsVerticalScrollIndicator={false}
        >
            
            <TitleContent>Những người bạn có thể biết</TitleContent>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) => <View key={key}>
                <FriendItem
                    imgUrl={require('./../../public/img/create_acc.png')}
                    imgMutual={require('./../../public/img/fb_reg.png')}
                    requestName={"Nguyễn Quang Linh"}
                    requestTime={""}
                    numOfMutual={17}
                    type={'suggest'}
                />
            </View>
            )}

        </ScrollView>
    );
}

export { SuggestFriend };