import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CommonStyle } from './commonStyle'

const StartCreateAcc = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumBlueText}>Tham gia Facebook</Text>
                    <Text style={styles.content}>Chúng tôi sẽ giúp bạn tạo tài khoản sau vài bước dễ dàng</Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={CommonStyle.textSubmit}>Bắt đầu</Text>
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
export { StartCreateAcc }
