import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'

const Name = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumBlueText}>Bạn tên gì?</Text>

                    <View style={styles.nameInput}>
                        <TextInput
                            style={styles.firstNameInput}
                            placeholder="Họ"
                        >
                        </TextInput>

                        <TextInput
                            style={styles.lastNameInput}
                            placeholder="Tên"
                        >
                        </TextInput>
                    </View>

                    {/* Nếu đã điền trường tên thì sẽ cho hiện TouchableOpacity */}
                    <Text style={styles.content}>Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn.</Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={CommonStyle.textSubmit}>Tiếp</Text>
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
    nameInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,

    },
    firstNameInput: {
        width: "47.5%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
    },
    lastNameInput: {
        width: "47.5%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
        marginLeft: "5%"
    },
    content: {
        fontSize: 15,
        textAlign: "center"
    }

})

export { Name }
