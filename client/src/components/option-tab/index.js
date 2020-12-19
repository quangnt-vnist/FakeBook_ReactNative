import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { pageName } from '../../navigator/constant.page'
import { AuthActions } from '../auth/redux/action';
function OptionTab(props) {

    const onPressProfile = () => {
        props.navigation.navigate(pageName.profile)
    }
    const onPressLogout = () => {
        props.logout();
        console.log('props', props);
        props.navigation.replace(pageName.LOG_IN_NEW_ACC)
    }

    return (
        <>
            <TouchableOpacity
                onPress={onPressProfile}
            >
                <Text>Xem trang cá nhân</Text>
            </TouchableOpacity>
            <Text>OptionTab</Text>



            <TouchableOpacity
                onPress={()=>onPressLogout()}
            >
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    logout: AuthActions.logout,
}
let connected = connect(mapStateToProps, mapActions)(OptionTab);

export { connected as OptionTab }