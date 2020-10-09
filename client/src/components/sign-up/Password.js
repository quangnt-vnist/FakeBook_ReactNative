import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'

const Password = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumBlueText}>Tạo mật khẩu</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                        >
                        </TextInput>
                        {/* <DatePickerAndroid></DatePickerAndroid> */}
                    </View>

                    {/* Nếu đã điền trường tên thì sẽ cho hiện TouchableOpacity */}
                    <Text style={styles.content1}>Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số chữ cái và dấu chấm câu (như ! và &).</Text>

                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={CommonStyle.textSubmit}>Tiếp</Text>
                    </TouchableOpacity> */}

                </View>


            </View >
            <View style={CommonStyle.footerQuestion}>
                <Text style={CommonStyle.smallBlueText}>Bạn đã có tài khoản?</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 15,
        textAlign: "center"
    },
    input: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,

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
