/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { pageName } from './constant.page';

import {
    // Login
    LoginNewAccount,
    LoginRecentlyAcc,

    // Sign up
    Birthday,
    Name,
    Password,
    PhoneNumber,
    Policy,
    ConfirmAcc,
    Remind,
    Remember,
    StartCreateAcc,

    // create post
    CreatePost,
    Feeling,
    Activity,
    Feeling_Activity,

    // comments
    Comments,

    // Report Post
    ReportPost,
    ConfirmReport,

    //profile
    Profile,
    PreViewAvatar,

    // Main content
    MainContainer,

    // Friend_tab
    AllRequest,
    SuggestFriend,
    ListFriends,

    // search friend page
    SearchPage,
    ViewVideo,
    Welcome,

} from '../components';

const Stack = createStackNavigator();
const Navigate = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name={pageName.WELCOME}
                    component={Welcome}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={pageName.LOG_IN_NEW_ACC}
                    component={LoginNewAccount}
                    options={{ headerShown: false }}
                />


                {/* Main container */}
                <Stack.Screen
                    name={pageName.main.MAIN}
                    component={MainContainer}
                    options={{ headerShown: false }}
                />



                {/* Search friend page */}
                <Stack.Screen
                    name={pageName.main.SEARCH}
                    component={SearchPage}
                    options={{ headerTitle: "", headerShown: false }}
                />

                {/* Friend tab */}
                <Stack.Screen name={pageName.friend_tab.SHOW_ALL} component={AllRequest} />
                <Stack.Screen name={pageName.friend_tab.SUGGEST_FRIEND} component={SuggestFriend} />
                <Stack.Screen name={pageName.friend_tab.All_FRIEND} component={ListFriends} />
                {/* <Stack.Screen name={pageName.feed.NEW_FEED} component={NewFeed} /> */}

                {/* watch tab */}
                <Stack.Screen name={pageName.watch_tab.PLAY_VIDEO} component={ViewVideo}
                    options={{
                        // headerShown: false, 
                        headerTitle: "Xem video khác"
                    }}
                />


                {/* Commments */}
                <Stack.Screen name={pageName.comment.COMMENT} component={Comments}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* Đăng nhập */}
                <Stack.Screen name={pageName.login_ACC_RECENTLY} component={LoginRecentlyAcc} />
                {/* <Stack.Screen name={pageName.LOG_IN_NEW_ACC} component={LoginNewAccount} /> */}

                {/* Tạo tài khoản */}
                <Stack.Screen name={pageName.sign_up.BEGIN} component={StartCreateAcc} />
                <Stack.Screen name={pageName.sign_up.NAME} component={Name} />
                <Stack.Screen name={pageName.sign_up.BIRTH} component={Birthday} />
                <Stack.Screen name={pageName.sign_up.PHONE} component={PhoneNumber} />
                <Stack.Screen name={pageName.sign_up.PASSWORD} component={Password} />
                <Stack.Screen name={pageName.sign_up.POLICY} component={Policy} />
                <Stack.Screen name={pageName.sign_up.CONFIRM} component={ConfirmAcc} />
                <Stack.Screen name={pageName.sign_up.REMIND} component={Remind} />
                <Stack.Screen name={pageName.sign_up.REMEMBER} component={Remember} />


                {/*Tạo bài viết*/}
                <Stack.Screen name={pageName.post_NEW_POST} component={CreatePost} />
                <Stack.Screen name={pageName.post_feeling} component={Feeling} />
                <Stack.Screen name={pageName.post_activity} component={Activity} />
                <Stack.Screen name={pageName.post_feeling_activity} component={Feeling_Activity} />

                {/* Trang cá nhân */}
                <Stack.Screen name={pageName.profile} component={Profile} />
                <Stack.Screen name={pageName.preview_avatar} component={PreViewAvatar} />

                {/* báo cáo bài viết */}
                <Stack.Screen name={pageName.report.REPORT_POST} component={ReportPost} />
                <Stack.Screen name={pageName.report.CONFIRM_REPORT} component={ConfirmReport} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
