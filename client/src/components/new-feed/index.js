import React, { useEffect } from 'react';
import { StatusBar, RefreshControl, ScrollView, LogBox, View, SafeAreaView } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import styled from "styled-components/native";

import AppBar from './appBar';
import Feed from './feed';
import Story from './story';
import ToolBar from './toolBar';
import Users from './users';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const NewFeed = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log('qangxt');

        // check data return isLoading === false;
        wait(2000).then(() => {
            console.log('quang');
            setRefreshing(false)

        });
    }, []);

    return (
        <>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    {/* <AppBar /> */}
                    <ToolBar navigation={navigation} />
                    <Story />
                    <Users />
                    <Feed navigation={navigation} />
                </ScrollView>
            </Container>
        </>
    )
}

export { NewFeed };