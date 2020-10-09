import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'

const PhoneNumber = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={[CommonStyle.mediumText, { color: "#204bf5" }]}>Số di động của bạn là gì?</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.phoneNumberInput}
                            placeholder="0123456789"
                            // keyboardType={'number-pad'}
                            keyboardType="numeric"
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, { backgroundColor: "#204BF5" }]}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#FFF" }]}>Tiếp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.otherBtn}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#777" }]}>Dùng địa chỉ email của bạn</Text>
                    </TouchableOpacity>

                </View>


            </View >
            <View style={CommonStyle.footerQuestion}>
                <Text style={[CommonStyle.smallText, { color: "#204BF5" }]}>Bạn đã có tài khoản?</Text>
            </View>
        </>
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
