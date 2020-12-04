import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { pageName } from '../../navigator/constant.page'
function OptionTab({ navigation }) {

    const onPressProfile = () => {
        navigation.navigate(pageName.profile)
    }

    return (
        <>
            <TouchableOpacity
                onPress={onPressProfile}
            >
                <Text>Xem trang cá nhân</Text>
            </TouchableOpacity>
            <Text>OptionTab</Text>
        </>
    );
}

export { OptionTab };