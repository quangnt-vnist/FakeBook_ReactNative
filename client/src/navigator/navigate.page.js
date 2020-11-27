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
    // Main content
    MainContainer,

    // // New feed
    // NewFeed,

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

    Comments,
    // create post
    CreatePost,
    Feeling,
    Activity,
    Feeling_Activity,


} from '../components';

const Stack = createStackNavigator();
const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Main container */}
                <Stack.Screen
                    name={pageName.main.MAIN}
                    component={MainContainer}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen name={pageName.feed.NEW_FEED} component={NewFeed} /> */}

                {/* Commments */}
                <Stack.Screen name={pageName.comment.COMMENT} component={Comments} />

                {/* Đăng nhập */}
                <Stack.Screen name={pageName.login_ACC_RECENTLY} component={LoginRecentlyAcc} />
                <Stack.Screen name={pageName.LOG_IN_NEW_ACC} component={LoginNewAccount} />

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

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
