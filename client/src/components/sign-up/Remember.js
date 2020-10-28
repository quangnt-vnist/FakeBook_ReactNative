import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Modal from 'react-native-modal';
import { pageName } from '../../navigator/constant.page'

const Remember = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true);


    const onPressBtnNext = () => {
        alert("Tạo tài khoản xong, chúc bạn sớm tìm được ny")

    }


    return (
        <Modal
            isVisible={isVisible}
            style={styles.model}
            backdropOpacity={0.8}

        >
            <View style={CommonStyle.background}>
                <View style={CommonStyle.row_90}>
                    <View style={{ flex: 1 }}>

                    </View>

                    <View style={{ flex: 8 }}>
                        <Text style={[CommonStyle.mediumText]}>Lưu thông tin đăng nhập của bạn</Text>

                        <Text style={[CommonStyle.content]}>Lần tới khi đăng nhập vào điện thoại này, bạn chỉ cần nhấn vào ảnh đại diện thay vì nhập mật khẩu.</Text>

                    </View>
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, { backgroundColor: "#999", marginBottom: 10 }]}
                            onPress={onPressBtnNext}
                        >
                            <Text style={[CommonStyle.textBtn]}>Lúc khác</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, { marginBottom: 10 }]}
                            onPress={onPressBtnNext}
                        >
                            <Text style={[CommonStyle.textBtn]}>OK</Text>
                        </TouchableOpacity>
                    </View>

                </View >
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    model: {
        // width: "80%",
        // marginLeft: "10%",
        // marginBottom: "40%",
        // marginTop: "40%"
    }
})

export { Remember }
