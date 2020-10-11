import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from './../../navigator/constant.page';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WheelPicker, TimePicker, DatePicker } from "react-native-wheel-picker-android";

const Birthday = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_AGE)
        console.log("clicked")
    }
    const wheelPickerDay = [];
    const wheelPickerMonth = [];
    const wheelPickerYear = [];

    let date = new Date();

    for (let i = 1; i <= 31; i++) {
        let x = `${i}`;
        wheelPickerDay.push(x);
        if (i <= 12) wheelPickerMonth.push(x);
    }

    let currentYear = date.getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
        let x = `${i}`;
        wheelPickerYear.push(x);
    }

    return (
        <>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2.5 }}>

                    <Text style={CommonStyle.mediumText}>Sinh nhật của bạn khi nào?</Text>
                    <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Có vẻ như bạn đã nhập thông tin sai. Hãy đảm bảo sử dụng ngày sinh thật của mình.</Text>
                    <Icon name="exclamation-circle" style={styles.warning}></Icon>
                    {/* <View style={styles.input}>
                        <TextInput
                            style={styles.birthdayInput}
                            placeholder="Sau thay bằng datePicker"
                        >
                        </TextInput>
                    </View> */}
                    <View style={styles.birthday}>
                        {/* Chon ngay */}
                        <View style={styles.birthdayCol}>
                            <WheelPicker
                                //   selectedItem={this.state.selectedItem}
                                data={wheelPickerDay}
                                width={50}
                            //   onItemSelected={this.onItemSelected}
                            />
                        </View>

                        {/* Chon thang */}
                        <View style={styles.birthdayCol}>
                            <WheelPicker
                                //   selectedItem={this.state.selectedItem}
                                width={50}
                                data={wheelPickerMonth}
                            //   onItemSelected={this.onItemSelected}
                            />
                        </View>
                        {/* Chon nam */}
                        <View style={styles.birthdayCol}>
                            <WheelPicker
                                //   selectedItem={this.state.selectedItem}
                                width={50}
                                data={wheelPickerYear}
                            //   onItemSelected={this.onItemSelected}
                            />
                        </View>
                    </View>


                    {/* Nếu đã điền trường tên thì sẽ cho hiện TouchableOpacity */}

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
        justifyContent: "center"
    },
    birthdayCol: {
        marginLeft: 5,
        marginRight: 5
    }
})

export { Birthday }
