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
    StartCreateAcc
} from '../components';

const Stack = createStackNavigator();
const Navigate = () => {
    console.log(pageName.signUp_BEGIN)
    console.log(pageName.LOG_IN_NEW_ACC)
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
                
                {/* Đăng nhập */}
                <Stack.Screen name={pageName.login_ACC_RECENTLY} component={LoginRecentlyAcc} />
                <Stack.Screen name={pageName.LOG_IN_NEW_ACC} component={LoginNewAccount} />

                {/* Tạo tài khoản */}
                <Stack.Screen name={pageName.signUp_BEGIN} component={StartCreateAcc} />
                <Stack.Screen name={pageName.signUp_NAME} component={Name} />
                <Stack.Screen name={pageName.signUp_BIRTH} component={Birthday} />
                <Stack.Screen name={pageName.signUp_PHONE} component={PhoneNumber} />
                <Stack.Screen name={pageName.signUp_PASSWORD} component={Password} />
                <Stack.Screen name={pageName.signUp_POLICY} component={Policy} />
                <Stack.Screen name={pageName.signUp_CONFIRM} component={ConfirmAcc} />
                <Stack.Screen name={pageName.signUp_REMIND} component={Remind} />
                <Stack.Screen name={pageName.signUp_REMEMBER} component={Remember} />




            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
