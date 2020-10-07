import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

const image = {
    // uri: "https://i0.wp.com/www.dealersunited.com/wp-content/uploads/2016/09/foolproof-guidelines-to-help-your-dealership-respond-to-comments-engagement-on-facebook.png?fit=635%2C318&ssl=1"
    uri: "https://64.media.tumblr.com/73c96b375ab835c132f831fc3cd9db03/tumblr_pvr2anf2pk1w89qpgo1_1280.jpg"
}



const LoginWithNewAccount = () => {
    const [acc, setAcc] = useState("");
    const [password, setPassword] = useState("");

    const onPressLogin = () => {

        Alert.alert('Account: ' + acc + '\n Password: ' + password)
    }
    const onPressForgotPW = () => {
        Alert.alert('Forgot pw')
    }
    const onPressBack = () => {
        Alert.alert('No way back')
    }
    const onPressCreateAcc = () => {
        Alert.alert('Create new acc')
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={styles.image}
            >
            </ImageBackground>
            <View style={styles.row}>
                <View style={styles.inputSection}>
                    <View style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5 }}>
                        {/* Điền tài khoản */}
                        <TextInput
                            style={styles.inputAcc}
                            placeholder="Tên đăng nhập"
                            onChangeText={acc => setAcc(acc)}
                            value={acc}
                        />
                        {/* Điền mật khẩu */}
                        <TextInput
                            style={styles.inputPassword}
                            placeholder="Mật khẩu"
                            onChangeText={password => setPassword(password)}
                            value={password}
                        />
                    </View>
                </View>
                {/* Chọn options */}
                <View style={styles.optionsSection} >
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.loginBtn}
                        onPress={onPressLogin}
                    >
                        <Text style={styles.loginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <Text style={styles.options} onPress={onPressForgotPW}> Quên mật khẩu? </Text>
                    <Text style={styles.options} onPress={onPressBack}> Quay lại </Text>
                </View>
                {/* Tạo Acc mới */}
                <View style={styles.bottomSection} >
                    <Text style={{ fontSize: 13, fontWeight: "600", marginBottom: 12, textAlign: "center", }}>
                        <View style={styles.lineLeft}></View>
                         HOẶC
                        <View style={styles.lineRight}></View>
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.createNewBtn}
                        onPress={onPressCreateAcc}
                    >
                        <Text style={styles.btnText}>Tạo tài khoản mới</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        flex: 4,
        resizeMode: "contain",
        // justifyContent: "center",
    },

    row: {
        flex: 9,
        width: '90%',
        marginLeft: '5%'
    },

    inputSection: {
        flex: 2,
        marginTop: 40,
    },

    inputAcc: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 16
    },
    inputPassword: {
        height: 40,
        fontSize: 16
    },

    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },

    optionsSection: {
        flex: 5
    },

    options: {
        fontSize: 20,
        fontWeight: "700",
        color: "#204BF5",
        textAlign: "center",
        marginTop: 12,
        backgroundColor: "black",
        alignContent: 'center',

    },

    loginText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#D0E7F5",
        textAlign: "center"
    },

    btnText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#204BF5",
        textAlign: "center",

    },

    loginBtn: {
        backgroundColor: "#1877f2",
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center"
    },

    bottomSection: {
        flex: 2,
    },


    createNewBtn: {
        backgroundColor: "#D0E7F5",
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center"
    }
});

export default LoginWithNewAccount;
