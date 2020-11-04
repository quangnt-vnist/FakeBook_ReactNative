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
    Register,
    LoginNewAccount,
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

                {/* Đăng nhập */}
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
