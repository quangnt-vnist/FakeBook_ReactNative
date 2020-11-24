import React from 'react';
import { StatusBar, ScrollView, RefreshControl } from "react-native";
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

const NewFeed = () => {
    const [refreshing, setRefreshing] = React.useState(false);

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
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <AppBar />
                    <ToolBar />
                    <Story />
                    <Users />
                    <Feed />
                </ScrollView>
            </Container>
        </>
    )
}

export { NewFeed };