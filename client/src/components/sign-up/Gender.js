import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView  } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../navigator/constant.page';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
// import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

const Gender = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_PHONE);
    }
    const [gender, setGender] = useState(4);
    const [genderText, setGenderInputText] = useState('');
    const [focusOnGenderText, setFucusOnGenderText] = useState(false);

    const handleSelectGender = (value) => {
        setGender(value);
        console.log("you have selected ", value)
    }

    const handleFucusOnGenderText = (value) => {
        setFucusOnGenderText(value);
        console.log("focus", value)
    }

    const handleChangeGenderInputText = (value) => {
        setGenderInputText(value);
        console.log("gender text", value)
    }

    const radioOptions = [
        { label: 'Nữ', value: 0 }, // Nam
        { label: 'Nam', value: 1 }, // Nu
        { label: `Tùy chỉnh ${gender === 2 ? "" : "\nChọn Tùy chỉnh nếu bạn thuộc giới tính khác hoặc không muốn tiết lộ"}`, value: 2 } // Bue due
    ];

    const data = [{
        value: 'Anh ấy',
      }, {
        value: 'Cô ấy',
      }, {
        value: 'Họ',
      }];

    return (
        <ScrollView style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>

                <View style={{ height: 50 }}></View>

                <View style={{ height: 75 }}>
                    <Text style={CommonStyle.mediumText}>Giới tính của bạn là gì?</Text>
                    <Text style={CommonStyle.content}>Về sau, bạn có thể thay đổi những ai nhìn thấy giới tính của mình trên trang cá nhân</Text>
                </View >

                <View style={{ flex: 4, marginBottom: 15, marginTop: 15, display: "flex", justifyContent: "center" }}>
                    <RadioForm animation={true}>
                        {/*                        
                                     ==========  CUSTOM RADIO  ============ 
                            Xem thêm : https://www.npmjs.com/package/react-native-simple-radio-button
                        */}

                        {
                            radioOptions.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} wrapStyle={styles.radioButton} >
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={false}
                                        onPress={() => {
                                            handleSelectGender(i);
                                            handleFucusOnGenderText(false);
                                            if (i !== 2) {
                                                // handleChangeGenderInputText('')
                                            }
                                        }}
                                        labelWrapStyle={styles.labelStyle}
                                    />
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={gender === i}
                                        onPress={() => {
                                            handleSelectGender(i);
                                            handleFucusOnGenderText(false);
                                            if (i !== 2) {
                                                // handleChangeGenderInputText('')
                                            }
                                        }}
                                        borderWidth={1.5}
                                        buttonInnerColor={'#1778F1'}
                                        buttonOuterColor={gender === i ? '#1778F1' : '#000'}
                                        buttonSize={8}
                                        buttonWrapStyle={styles.radioStyle}
                                    />
                                </RadioButton>
                            ))
                        }
                    </RadioForm>
                    {
                        gender === 2 &&
                        <View > 
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Football', value: 'football' },
                                    { label: 'Baseball', value: 'baseball' },
                                    { label: 'Hockey', value: 'hockey' },
                                ]}
                                style={{
                                    color: '#111'
                                }}
                            />
                            <TextInput
                                style={focusOnGenderText ? styles.genderInputNameFocusOn : styles.genderInputNameFocusOut}
                                placeholder="Nhập giới tính của bạn (không bắt buộc)"
                                onFocus={() => handleFucusOnGenderText(true)}
                                onChangeText={text => handleChangeGenderInputText(text)}
                                value={genderText}
                            ></TextInput>
                            <Text style={styles.helpText}>Danh xưng của bạn hiển thị với tất cả mọi người</Text>
                        </View>
                    }
                </View>

                <View style={{ flex: 2, display: "flex", justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    radioButton: {
        borderBottomWidth: 1,
        borderBottomColor: "#999"
    },
    labelStyle: {
        paddingBottom: 15,
        paddingTop: 15,
        fontSize: 16,
        color: '#222',
        fontWeight: "700",
        width: "90%",
    },
    radioStyle: {
        paddingBottom: 15,
        paddingTop: 15,
    },
    genderInputNameFocusOn: {
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },
    genderInputNameFocusOut: {
        backgroundColor: "#EEF2F3",
        borderRadius: 5,
        lineHeight: 20,
    },
    helpText: {
        fontSize: 13,
        color: "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        lineHeight: 40,
    },
    bonusRender: {
        display: "flex",
        justifyContent: "center",
        // alignItems: 'center',
        marginBottom: 15,
        marginTop: 30,
    }
})

export { Gender }
