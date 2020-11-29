import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, ListView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonStyle } from '../sign-up/commonStyle';
import { pageName } from '../../navigator/constant.page';

const LoginRecentlyAcc = ({ navigation }) => {

    const onPressCreateAcc = () => {
        navigation.navigate(pageName.sign_up.BEGIN)
    }

    return (
        <View style={CommonStyle.background}>
            <View style={styles.row_80}>
                <Icon name="facebook-official" style={styles.fb_icon} />

                <View style={styles.list_avatar}>
                    <Text style={{ color: "green", fontSize: 25 }}> Avartar of recently users here</Text>
                </View>

                {/*ve sau se su dung list view */}
                {/* <ListView
                style={styles.list_avatar}
                dataSource=
                renderRow={(listAvt) => {
                    <View>
                        <Text>{listAvt}</Text>
                    </View>
                }}
            >
            </ListView> */}
                <View style={styles.options}>
                    <View style={styles.block}>
                        <Icon name="plus" style={styles.icon} />
                        <Text style={styles.link}>Đăng nhập bằng tài khoản khác</Text>
                    </View>
                    <View style={styles.block}>
                        <Icon name="search" style={styles.icon} />
                        <Text style={styles.link}>Tìm tài khoản</Text>
                    </View>

                </View>

                <View style={styles.newAcc}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, styles.btn]}
                        onPress={onPressCreateAcc}
                    >
                        <Text style={[CommonStyle.smallText, { color: "#1577F2", fontWeight: "700" }]}>TẠO TÀI KHOẢN FACEBOOK MỚI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row_80: {
        flex: 1,
        width: '80%',
        marginLeft: '10%'
    },

    fb_icon: {
        flex: 2,
        alignSelf: "center",
        color: "#1577F2",
        fontSize: 40,
        marginTop: 40,
        borderRadius: 10
    },

    list_avatar: {
        flex: 6,
    },

    options: {
        flex: 4,
        alignItems: "flex-start",
    },

    newAcc: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },

    btn: {
        height: 40,
        backgroundColor: "#CDE2F3",
        width: 320
    },

    block: {
        flexDirection: "row",
        marginTop: 10,
    },

    icon: {
        color: "#1577F2",
        fontSize: 25,
        backgroundColor: "#CDE2F3",
        width: 35,
        padding: 5,
        borderRadius: 5,
    },

    link: {
        color: "#1577F2",
        fontWeight: "700",
        fontSize: 14,
        textAlignVertical: "center",
        marginLeft: 10
    }
})

export { LoginRecentlyAcc };
