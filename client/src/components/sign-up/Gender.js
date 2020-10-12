import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../navigator/constant.page';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const Gender = ({ navigation }) => {
    const onPressBtnNext = () => {
        navigation.navigate(pageName.REG_PHONE);
    }
    const [gender, setGender] = useState(4);

    const handleSelectGender = (value) => {
        setGender(value);
        console.log("you have selected ", value)
    }
    const radioOptions = [
        { label: 'Nữ', value: 0 }, // Nam
        { label: 'Nam', value: 1 }, // Nu
        { label: 'Tùy chỉnh', value: 2 } // Bue due
    ];

    return (
        <>
            <View style={CommonStyle.row_90}>

                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 1.5 }}>
                    <Text style={CommonStyle.mediumText}>Giới tính của bạn là gì?</Text>
                    <Text style={CommonStyle.content}>Về sau, bạn có thể thay đổi những ai nhìn thấy giới tính của mình trên trang cá nhân</Text>
                </View >

                <View style={{ flex: 2.5 }}>
                    <RadioForm animation={true}               >
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
                                        onPress={() => console.log("you clicked me")}
                                        labelWrapStyle={styles.labelStyle}
                                    />
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={gender == i}
                                        onPress={handleSelectGender}
                                        borderWidth={1.5}
                                        buttonInnerColor={'#222'}
                                        buttonOuterColor={'#000'}
                                        buttonSize={8}
                                        buttonWrapStyle={styles.radioStyle}
                                    />
                                </RadioButton>
                            ))
                        }
                    </RadioForm>
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
        </>
    )
}

const styles = StyleSheet.create({
    radioButton: {
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#999"
    },
    labelStyle: {
        fontSize: 16,
        color: '#222',
        fontWeight: "700",
        width: "20%"
    },
    radioStyle: {
        marginLeft: "75%",
    }
})

export { Gender }
