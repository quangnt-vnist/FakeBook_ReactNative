import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { pageName } from './../../navigator/constant.page'

const PhoneNumber = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)

    const onPressBtnNext = () => {

        if (validatePhoneNumber()) {
            setValidPhoneNumber(true);
            navigation.navigate(pageName.REG_PASSWORD);
        }
        else {
            setValidPhoneNumber(false)
        }

    }
    const handleUseEmail = () => {
        navigation.navigate(pageName.REG_EMAIL);
    }

    const validatePhoneNumber = () => {

        let reg = /([0-9]{10})\b/;

        return reg.test(phoneNumber);
    }

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2 }}>

                    <Text style={[CommonStyle.mediumText, { marginBottom: 20 }]}>Nhập số di động của bạn</Text>
                    {!validPhoneNumber &&
                        <Text style={{ textAlign: "center" }}>
                            <Text style={[CommonStyle.smallText, { color: "red" }]}>Vui lòng nhập một số điện thoại hợp lệ hoặc dùng địa chỉ email của bạn.</Text>
                            <Icon name="exclamation-circle" style={styles.warning}></Icon>
                        </Text>
                    }
                    <View style={styles.input}>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={phone => setPhoneNumber(phone)}
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
                <Text onPress={handleUseEmail} style={[CommonStyle.smallText, { color: "#204BF5", fontWeight: "700" }]}>Đăng ký bằng địa chỉ email</Text>
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

export { PhoneNumber }
