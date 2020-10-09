import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground, Button, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../navigator/constant.page'

const FB_BG_REG = {
    uri: "https://i0.wp.com/www.dealersunited.com/wp-content/uploads/2016/09/foolproof-guidelines-to-help-your-dealership-respond-to-comments-engagement-on-facebook.png?fit=635%2C318&ssl=1"
}

// const onPressBtnNext = () => {
//     // Alert.alert('Button Next pressed')
// }

const Register = ({ navigation }) => {
    const onPressBtnNext = () => {
        // Alert.alert('Button Next pressed')
        navigation.navigate(pageName.REG_NAME);
    }

    const onPressHasAccount = () => {
        // Alert.alert('Button Prev pressed');
        navigation.navigate(pageName.LOG_IN_NEW_ACC);
    }

    return (
        <View style={style.view}>
            {/* <View style={style.navbar}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={onPressBtnPrev}
                >
                    <Icon name="arrow-left" color="#eee" size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "600", }}> Quay lại trang trước</Text>
            </View> */}
            <View style={style.view1}>
                <ImageBackground style={style.imageStyle}
                    source={FB_BG_REG}>
                </ImageBackground>
            </View>
            <View style={style.view2}>
                <View style={style.desText}>
                    <Text style={{ fontSize: 20 }}>Tham gia FakeBook</Text>
                    <Text style={{ color: '#aaa', textAlign: 'center' }}>Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng</Text>
                </View>

                <TouchableOpacity
                    style={style.btnNext}
                    activeOpacity={0.5}
                    // onPress={() => Alert.alert('Button with adjusted color pressed')}
                    onPress={onPressBtnNext}
                >
                    <Text style={{ fontSize: 16, fontWeight: '700', textAlign: "center", color: '#fff' }}>Tiếp</Text>
                </TouchableOpacity>
            </View>
            <View style={style.view3}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={onPressHasAccount}
                >
                    <Text style={{ color: '#007AFF' }}>Bạn đã có tài khoản?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    navbar: {
        // backgroundColor: "#007ACC",
        height: '6%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "center"
    },
    view1: {
        // backgroundColor: "red",
        height: "40%",
        flex: 2
    },
    imageStyle: {
        flex: 1,
        // width: "100%",
        // height: "70%",
        resizeMode: "cover",
        justifyContent: "center",
    },
    view2: {
        // backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
    },
    desText: { height: '60%', width: "90%", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' },
    btnNext: {
        width: "90%",
        // height: 35,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    view3: {
        // backgroundColor: "#FFFFFF",
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: 'center',
        marginBottom: 10,
    },

})

export default Register
