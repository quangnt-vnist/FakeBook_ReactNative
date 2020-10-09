import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'

const Birthday = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumText}>Khi nào là Sinh nhật của bạn?</Text>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.birthdayInput}
                            placeholder="Sau thay bằng datePicker"
                        >
                        </TextInput>
                        {/* <DatePickerAndroid></DatePickerAndroid> */}
                    </View>

                    {/* Nếu đã điền trường tên thì sẽ cho hiện TouchableOpacity */}
                    <Text style={CommonStyle.content}>Bạn có thể chọn xem ai được thấy nội dung này trên trang cá nhân của mình.</Text>
                    <Text style={[CommonStyle.content, { color: "#204BF5", marginTop: -10 }]}>Tại sao tôi cần cung cấp ngày sinh của mình?</Text>

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
    birthdayInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#999",
        borderWidth: 1,
        height: 40,
        fontSize: 15,
    },
})

export { Birthday }
