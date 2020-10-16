import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from './../../navigator/constant.page';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'

const Birthday = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_AGE)
        console.log(date)
    }

    const [date, setDate] = useState(new Date())
    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 3, display: "flex", alignItems: "center" }}>

                    <Text style={CommonStyle.mediumText}>Sinh nhật của bạn khi nào?</Text>
                    <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Có vẻ như bạn đã nhập thông tin sai. Hãy đảm bảo sử dụng ngày sinh thật của mình.</Text>
                    <Icon name="exclamation-circle" style={styles.warning}></Icon>

                    <DatePicker
                        date={date}
                        mode="date"
                        androidVariant="nativeAndroid"
                        locale='vi'
                        onDateChange={setDate}
                    />

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
        </View>
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
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    },
    birthday: {
        flexDirection: "row",
        justifyContent: "center",

    },
    birthdayCol: {
        marginLeft: 5,
        marginRight: 5,

    }
})

export { Birthday }
