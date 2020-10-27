import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { pageName } from './../../navigator/constant.page'

const Email = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true)

    const onPressBtnNext = () => {
        setValidEmail(true);
        navigation.navigate(pageName.REG_PASSWORD);

    }
    const handleUsePhoneNumber = () => {
        navigation.navigate(pageName.REG_PHONE);
    }

    // const validateEmail = () => {  

    //     let reg = /([0-9]{10})\b/;

    //     return reg.test(email);
    // }

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2 }}>

                    <Text style={[CommonStyle.mediumText, { marginBottom: 20 }]}>Nhập địa chỉ email của bạn</Text>
                    {!validEmail &&
                        <Text style={{ textAlign: "center" }}>
                            <Text style={[CommonStyle.smallText, { color: "red" }]}>Vui lòng nhập địa chỉ email hợp lệ.</Text>
                            <Icon name="exclamation-circle" style={styles.warning}></Icon>
                        </Text>
                    }
                    <View style={styles.input}>
                        <TextInput
                            value={email}
                            onChangeText={phone => setEmail(phone)}
                            style={styles.phoneNumberInput}
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
                <Text onPress={handleUsePhoneNumber} style={[CommonStyle.smallText, { color: "#204BF5", fontWeight: "700" }]}>Đăng ký bằng số di động</Text>
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

export { Email }
