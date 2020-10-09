import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CommonStyle } from './commonStyle'

const FinishCreateAcc = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumBlueText}>Hoàn tất đăng ký</Text>
                    <Text style={styles.content}>Bằng cách ấn vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và chọn không nhận bất cứ lúc nào.</Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={CommonStyle.textSubmit}>Đăng ký</Text>
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
        margin: 10,
        textAlign: "center",
        fontSize: 15
    },
})
export { FinishCreateAcc }
