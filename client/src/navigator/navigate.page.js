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
    LoginRecentlyAcc,
    StartCreateAcc,
    Birthday,
    FinishCreateAcc,
    Gender,
    Name,
    Password,
    PhoneNumber,
    Age
} from '../components';

const Stack = createStackNavigator();
const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={pageName.REG_AGE} component={Age} />
                <Stack.Screen name={pageName.REG_GENDER} component={Gender} />
                <Stack.Screen name={pageName.REG_PHONE} component={PhoneNumber} />
                <Stack.Screen name={pageName.REG_PASSWORD} component={Password} />

                <Stack.Screen name={pageName.REG_NAME} component={Name} />
                <Stack.Screen name={pageName.REG_BIRTH} component={Birthday} />

                <Stack.Screen name={pageName.REG_BEGIN} component={Register} />
                <Stack.Screen name={pageName.LOG_IN_NEW_ACC} component={LoginNewAccount} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
