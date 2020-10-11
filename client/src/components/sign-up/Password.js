import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from '../../navigator/constant.page';

const Password = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_BIRTH)
    }
    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 3 }}>

                    <Text style={[CommonStyle.mediumText, { marginBottom: 20 }]}>Chọn mật khẩu</Text>
                    <Text style={[CommonStyle.smallText, { color: "red" }]}>Mật khẩu của bạn phải cso thối thiểu 6 chữ cái, số và biểu tượng (như ! và %%)</Text>
                    <Icon name="exclamation-circle" style={styles.warning}></Icon>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.phoneNumberInput}
                            placeholder="Mật khẩu"
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn]}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>

            </View >

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
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    }
})


export { Password }
