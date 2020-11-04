import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from '../../navigator/constant.page';

const Password = ({ navigation }) => {

    const [password, setPassword] = useState("");
    const [strongPassword, setStrongPassword] = useState(true);

    const onPressBtnNext = () => {

        setStrongPassword(false);

        // COMMENT VALIDATE ĐỂ CHECK CHO NHANH

        // if (validatePassword()) {
        //     setStrongPassword(true);
        navigation.navigate(pageName.signUp_POLICY)
        // }
        // else {
        //     setStrongPassword(false);
        // }
    }

    const validatePassword = () => {

        let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

        return reg.test(password);
    }

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 3 }}>

                    <Text style={[CommonStyle.mediumText, { marginBottom: 20 }]}>Chọn mật khẩu</Text>
                    {!strongPassword &&
                        <Text style={{ textAlign: "center" }}>
                            <Text style={[CommonStyle.smallText, { color: "red" }]}>Mật khẩu của bạn phải có thối thiểu 6 chữ cái, số và biểu tượng (như ! và %%)</Text>
                            <Icon name="exclamation-circle" style={styles.warning}></Icon>
                        </Text>
                    }
                    <View style={styles.input}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            style={styles.phoneNumberInput}
                            placeholder="Mật khẩu"
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn]}
                        onPress={
                            onPressBtnNext
                        }
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>

            </View >

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


export { Password }
