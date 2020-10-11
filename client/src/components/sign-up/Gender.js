import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../navigator/constant.page';

const Gender = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_PHONE);
    }
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}>
                    <Text>Gender kho qua lam sau</Text>
                </View>


                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>






            </View >
            {/* <View style={CommonStyle.footerQuestion}>
                <Text style={CommonStyle.smallText}>Bạn đã có tài khoản?</Text>
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({

})

export { Gender }
