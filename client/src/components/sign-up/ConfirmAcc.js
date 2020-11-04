import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { pageName } from './../../navigator/constant.page'

const ConfirmAcc = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [validConfirmCode, setValidConfirmCode] = useState(true)
    const [code, setCode] = useState(Math.round(Math.random() * 10000))

    const onPressBtnNext = () => {

        // if (validatePhoneNumber()) {
        //     setValidConfirmCode(true);
        navigation.navigate(pageName.signUp_REMIND);
        // }
        // else {
        //     setValidConfirmCode(false)
        // }

    }


    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}>

                </View>

                <View style={{ flex: 2 }}>
                    <Text style={[CommonStyle.content]}>Nhập mã gồm 5 chữ số được gửi cho bạn.</Text>

                    <Text style={[CommonStyle.content]}>Mã xác thực của bạn là: {code}</Text>

                    <View style={[styles.input]}>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={phone => setPhoneNumber(phone)}
                            style={styles.phoneNumberInput}
                            keyboardType="numeric"
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, { marginBottom: 10 }]}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Xác nhận</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, { backgroundColor: "#999" }]}
                        onPress={onPressForgot}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tôi không nhận được mã</Text>
                    </TouchableOpacity> */}
                </View>

            </View >



            <View style={CommonStyle.footer}>
                <Text style={[CommonStyle.smallText, { color: "#204BF5", fontWeight: "700" }]}>Đăng xuất</Text>
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
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    }
})

export { ConfirmAcc }
