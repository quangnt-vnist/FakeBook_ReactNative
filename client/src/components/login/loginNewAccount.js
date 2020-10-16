import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { CommonStyle } from '../sign-up/commonStyle'
import { pageName } from '../../navigator/constant.page'

const imageDefault = {
    uri: "https://64.media.tumblr.com/73c96b375ab835c132f831fc3cd9db03/tumblr_pvr2anf2pk1w89qpgo1_1280.jpg"
}
const imageResize = {
    uri: "http://nutrientsmdvn.com/image/catalog/nutrient/facebook.png"
    // uri: "./fb_reg.png"
}



const LoginNewAccount = ({ navigation }) => {
    const [acc, setAcc] = useState("");
    const [password, setPassword] = useState("");
    const [resizeImage, setResizeImage] = useState(false);
    const [enteringText, setEnteringText] = useState(false);
    const [enteringPass, setEnteringPass] = useState(false);

    // const focusOnTextInput = (flex) => {
    //     setImageFlex(flex);
    //     Alert.alert('change image flex to 2');

    // }
    const onPressLogin = () => {

        Alert.alert('Account: ' + acc + '\n Password: ' + password)
    }
    const onPressForgotPW = () => {
        Alert.alert('Forgot pw')
    }
    const onPressCreateAcc = () => {
        navigation.navigate(pageName.REG_BEGIN)
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={resizeImage ? imageResize : imageDefault}
                style={resizeImage ? styles.imageOnFocusInput : styles.image}
            >
            </ImageBackground>

            <View style={styles.row}>
                <View style={styles.inputSection}>

                    {/* Điền tài khoản */}
                    <TextInput
                        style={[styles.input, enteringText && CommonStyle.inputUnderLine]}
                        placeholder="Số điện thoại hoặc email"
                        onChangeText={acc => setAcc(acc)}
                        value={acc}
                        onFocus={() => {
                            setResizeImage(true);
                            setEnteringText(true)
                        }}
                        onBlur={() => {
                            setEnteringText(false)
                        }}

                    />

                    {/* Điền mật khẩu */}
                    <TextInput
                        style={[styles.input, enteringPass && CommonStyle.inputUnderLine]}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        onFocus={() => {
                            setResizeImage(true);
                            setEnteringPass(true)
                        }}
                        onBlur={() => {
                            // setResizeImage(false);
                            setEnteringPass(false)
                        }}
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressLogin}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#ddd" }]}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>

                {!resizeImage ?
                    <View style={styles.optionsSection} >

                        {/* Quên mật khẩu */}
                        <TouchableOpacity
                            onPress={onPressForgotPW}
                        >
                            <Text style={styles.options} > Quên mật khẩu? </Text>
                        </TouchableOpacity>

                        {/* Hoặc */}
                        <Text style={{ fontSize: 13, fontWeight: "600", marginTop: "15%" }}>
                            HOẶC
                        </Text>

                        {/* Nút tạo new acc */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, { backgroundColor: "#32A24C", marginTop: "15%", width: "90%" }]}
                            onPress={onPressCreateAcc}
                        >
                            <Text style={[CommonStyle.mediumText, { color: "#FFF" }]}>Tạo tài khoản Facebook mới</Text>
                        </TouchableOpacity>

                    </View> :

                    <View>
                        {/* Tạo new acc*/}
                        <TouchableOpacity
                            onPress={onPressCreateAcc}
                            style={{ marginBottom: "25%", }}
                        >
                            <Text style={[styles.options, { fontSize: 18 }]} > Tạo tài khoản Facebook mới </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    image: {
        flex: 4,
        resizeMode: "contain",
        // justifyContent: "center",
    },
    imageOnFocusInput: {
        flex: 3,
        resizeMode: "contain",
    },

    row: {
        flex: 9,
        width: '90%',
        marginLeft: '5%'
    },

    inputSection: {
        flex: 4,
        marginTop: 40,
    },

    inputSectionOnFocus: {
        flex: 2,
        marginTop: 20,
    },

    input: {
        height: 40,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 15
    },

    optionsSection: {
        flex: 7,
        alignItems: "center"

    },

    optionsSectionOnFocus: {
        flex: 4,
        marginTop: 15
    },

    options: {
        display: "flex",
        fontSize: 20,
        fontWeight: "700",
        color: "#204BF5",
        textAlign: "center",
        marginTop: 12,
    }

});

export { LoginNewAccount };
