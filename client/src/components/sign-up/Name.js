import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../navigator/constant.page';

const Name = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_BIRTH);
    }
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2.5 }}>

                    <Text style={CommonStyle.mediumText}>Bạn tên gì?</Text>
                    <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Vui lòng nhập họ và tên của bạn</Text>
                    <Icon name="exclamation-circle" style={styles.warning}></Icon>
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
                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>






            </View >
            {/* <View style={CommonStyle.footerQuestion}>
                <Text style={CommonStyle.smallText}>Bạn đã có tài khoản?</Text>
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    nameInput: {
        flexDirection: 'row',
        marginTop: 20,
    },
    firstNameInput: {
        width: "47.5%",
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        height: 40,
        fontSize: 20,
    },
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    }
})

export { Name }
