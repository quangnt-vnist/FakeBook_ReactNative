import React, { useEffect } from 'react';
import { StatusBar, RefreshControl, ScrollView, LogBox, View, SafeAreaView } from "react-native";
import { connect } from 'react-redux';
// import { ScrollView } from 'react-native-gesture-handler';
import styled from "styled-components/native";
import { PostAction } from '../post/redux/action';

import AppBar from './appBar';
import { Feed } from './feed';
import { Story } from './story';
import { ToolBar } from './toolBar';
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

const NewFeed = (props) => {

    const { auth, post } = props;

    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        // ignore Logs
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

        // get list post,
        props.getAllPost();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.getAllPost();
        console.log('refresh trang chu');

        // check data return isLoading === false;
        wait(2000).then(() => {
            console.log('done');
            setRefreshing(false)

        });
    }, []);

    // const refreshData = () => {
    //     setRefreshing(true);
    //     props.getAllPost();
    //     props.getPostByUser();
    //     console.log('refresh trang chu');

    //     // check data return isLoading === false;
    //     wait(2000).then(() => {
    //         console.log('done');
    //         setRefreshing(false)

    //     });
    // }

    // console.log('list post', post);
    // console.log('auth', auth);

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
                    <ToolBar navigation={props.navigation} />
                    <Story />
                    <Users />
                    <Feed navigation={props.navigation} />
                </ScrollView>
            </Container>
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

let connected = connect(mapStateToProps, mapActions)(NewFeed);

export { connected as NewFeed }

// export { NewFeed };