import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'

const Name = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumText}>Bạn tên gì?</Text>

                    <View style={styles.nameInput}>
                        <TextInput
                            style={styles.firstNameInput}
                            placeholder="Họ"
                        >
                        </TextInput>

                        <TextInput
                            style={[styles.firstNameInput, { marginLeft: "5%" }]}
                            placeholder="Tên"
                        >
                        </TextInput>
                    </View>

                    {/* Nếu đã điền trường tên thì sẽ cho hiện TouchableOpacity */}
                    <Text style={CommonStyle.content}>Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn.</Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#FFF" }]}>Tiếp</Text>
                    </TouchableOpacity>

                </View>


            </View >
            <View style={CommonStyle.footerQuestion}>
                <Text style={CommonStyle.smallText}>Bạn đã có tài khoản?</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    nameInput: {
        flexDirection: 'row',
        marginTop: 10,
    },
    firstNameInput: {
        width: "47.5%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
    },
})

export { Name }
