import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CommonStyle } from './commonStyle'

const StartCreateAcc = () => {
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 2.5 }}></View>

                <View style={{ flex: 7.5 }}>

                    <Text style={CommonStyle.mediumText}>Tham gia Facebook</Text>
                    <Text style={CommonStyle.content}>Chúng tôi sẽ giúp bạn tạo tài khoản sau vài bước dễ dàng</Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#FFF" }]}>Bắt đầu</Text>
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

})
export { StartCreateAcc }
