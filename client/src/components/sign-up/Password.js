import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'

const Password = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumText}>Tạo mật khẩu</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                        >
                        </TextInput>
                    </View>

                    <Text style={CommonStyle.content}>Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số chữ cái và dấu chấm câu (như ! và &).</Text>
                </View>


            </View >
            <View style={CommonStyle.footerQuestion}>
                <Text style={CommonStyle.smallText}>Bạn đã có tài khoản?</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    input: {
        flexDirection: 'row',
        marginTop: 10,
    },
    passwordInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#999",
        borderWidth: 1,
        height: 40,
        fontSize: 15,
    },
    content1: {
        fontSize: 15,
        textAlign: "center",

    },
    content2: {
        fontSize: 15,
        textAlign: "center",
        color: "#204bf5"
    }

})

export { Password }
