import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Modal from 'react-native-modal';
import { pageName } from '../../navigator/constant.page'

const Remind = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true);


    const onPressBtnNext = () => {
        setIsVisible(false);

        navigation.navigate(pageName.signUp_REMEMBER);
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
                        <Text
                            style={[CommonStyle.mediumText, styles.alignLeft, { marginLeft: 10 }]}>
                            Nhớ số điện thoại và mật khẩu của bạn.
                            </Text>

                        <Text style={[CommonStyle.content, styles.alignLeft]}>
                            Bạn cần nhập thông tin này vào lần đăng nhập sau
                            </Text>

                        <Text style={[CommonStyle.smallText, styles.alignLeft, { marginLeft: 10 }]}>Số điện thoại</Text>
                        <Text style={[CommonStyle.content, styles.alignLeft]}>026656666</Text>

                        <Text style={[CommonStyle.smallText, styles.alignLeft, { marginLeft: 10 }]}>Mật khẩu</Text>
                        <Text style={[CommonStyle.content, styles.alignLeft]}>linhdeptraiquatroi</Text>


                    </View>
                    <View style={{ flex: 2 }}>
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
        width: "80%",
        marginLeft: "10%",
        marginBottom: "40%",
        marginTop: "40%"
    },
    alignLeft: {
        textAlign: "left"
    }
})

export { Remind }
