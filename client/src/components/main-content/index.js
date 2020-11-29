import React from 'react';

import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAWS from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NewFeed } from "./../new-feed";
import { WatchTab } from "./../watchs-tab";
import { FriendRequestTab } from "./../friend-request-tab";
import { NotificationTab } from "./../notification-tab";
import { OptionTab } from "./../option-tab";

import AppBar from '../new-feed/appBar';

const MainTopTab = createMaterialTopTabNavigator();

const MainContainer = (props) => {

    const tabBarOptions = {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#FFFFFF',
        // inactiveTintColor: '#F8F8F8',
        style: {
            // backgroundColor: '#633689',
        },
        labelStyle: {
            textAlign: 'center',
        },
        // indicatorStyle: {
        //     borderBottomColor: '#87B56A',
        //     borderBottomWidth: 2,
        // },
    }

    return (
        <>
            <AppBar />
            <MainTopTab.Navigator
                tabBarPosition='top'
                // initialRouteName="Watch"
                swipeEnabled={true}
                animationEnabled={true}
                tabBarOptions={tabBarOptions}
            >
                <MainTopTab.Screen
                    name="New feed"
                    component={NewFeed}
                    options={{
                        // title: props.route.params.name,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <MaterialCommunityIcons name='home' size={23} color={focused ? "#007AFD": "#424040"} />
                            )
                        },
                    }}
                />
                <MainTopTab.Screen
                    name="Friend request"
                    component={FriendRequestTab}
                    options={{
                        // title: props.route.params.name,
                        tabBarLabel: 'Request',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <FontAWS color={focused ? "#007AFD": "#424040"} size={19} name={'user-friends'} />
                            )
                        },
                        // tabBarIcon: () => (
                        //     <FontAWS style={[{ color: '#424040' }]} size={19} name={'user-friends'} />
                        // ),
                    }}
                />
                <MainTopTab.Screen
                    name="Watch"
                    component={WatchTab}
                    options={{
                        // title: props.route.params.name,
                        tabBarLabel: 'Watch',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <MaterialCommunityIcons size={23} name={'television-play'} color={focused ? "#007AFD": "#424040"} />
                            )
                        },
                        // tabBarLabel: 'Watch',
                        // tabBarIcon: () => (
                        //     <MaterialCommunityIcons style={[{ color: '#424040' }]} size={23} name={'television-play'} />
                        // ),
                    }}
                />
                <MainTopTab.Screen
                    name="Notify"
                    component={NotificationTab}
                    options={{
                        // title: props.route.params.name,
                        tabBarLabel: 'Notify',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Ionicons color={focused ? "#007AFD": "#424040"} size={20} name={'notifications-outline'} />
                            )
                        },
                        // tabBarIcon: () => (
                        //     <Ionicons style={[{ color: '#424040' }]} size={20} name={'notifications-outline'} />
                        // ),
                    }}
                />
                <MainTopTab.Screen
                    name="Option"
                    component={OptionTab}
                    options={{
                        tabBarLabel: 'Option',
                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Ionicons color={focused ? "#007AFD": "#424040"} size={25} name={'menu'} />
                            )
                        },
                        // tabBarIcon: () => (
                        //     <Ionicons style={[{ color: '#424040' }]} size={25} name={'menu'} />
                        // ),
                    }}
                />
            </MainTopTab.Navigator>
        </>
    );
}

export { MainContainer };