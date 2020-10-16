import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from './../../navigator/constant.page'

const PhoneNumber = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_PASSWORD);
    }
    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2 }}>

                    <Text style={[CommonStyle.mediumText, { marginBottom: 20 }]}>Nhập số di động của bạn?</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.phoneNumberInput}
                            placeholder="0123456789"
                            keyboardType="numeric"
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn]}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>

            </View >



            <View style={CommonStyle.footer}>
                <Text style={[CommonStyle.smallText, { color: "#204BF5", fontWeight: "700" }]}>Đăng ký bằng địa chỉ email</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        marginTop: 10,
    },
    phoneNumberInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
    },
    otherBtn: {
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        marginTop: 20
    },
})

export { PhoneNumber }
