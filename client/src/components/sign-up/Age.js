import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from './../../navigator/constant.page';
import Icon from 'react-native-vector-icons/FontAwesome';

const Age = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_GENDER)
    }

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1.5 }}></View>

                <View style={{ flex: 2 }}>

                    <Text style={CommonStyle.mediumText}>Bạn bao nhiêu tuổi?</Text>
                    {/* <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Có vẻ như bạn đã nhập thông tin sai. Hãy đảm bảo sử dụng ngày sinh thật của mình.</Text>
                    <Icon name="exclamation-circle" style={styles.warning}></Icon> */}
                    <View style={styles.input}>
                        <TextInput
                            style={styles.ageInput}
                            placeholder="Độ tuổi"
                            keyboardType="numeric"
                        >
                        </TextInput>
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
            <View style={CommonStyle.footer}>
                <Text style={CommonStyle.smallText, { fontWeight: "700", color: "#204bf5" }}>Dùng ngày sinh</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        display: "flex",
        alignItems: "center",
        marginTop: 10
    },
    ageInput: {
        width: "30%",
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        height: 45,
        fontSize: 20,
    },
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    }
})

export { Age }
