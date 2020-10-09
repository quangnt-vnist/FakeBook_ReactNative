import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'

const PhoneNumber = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumBlueText}>Số di động của bạn là gì?</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.phoneNumberInput}
                            placeholder="0123456789"
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={CommonStyle.textSubmit}>Tiếp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.otherBtn}
                    >
                        <Text style={styles.otherText}>Dùng địa chỉ email của bạn</Text>
                    </TouchableOpacity>

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
    phoneNumberInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
    },
    content: {
        fontSize: 15,
        textAlign: "center"
    },
    otherBtn: {
        // backgroundColor: "#ffe",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        marginTop: 20

    },
    otherText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#777",
        textAlign: "center"
    },

})

export { PhoneNumber }
