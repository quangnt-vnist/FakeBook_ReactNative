import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginRecentlyAcc = () => {
    return (
        <View style={styles.row}>
            {/* <View style={{ borderRadius: 50 }}> */}
            <Icon name="facebook-official" style={styles.fb_icon} />

            <View style={styles.list_avatar}>
                <Text style={{ color: "green", fontSize: 35 }}> Avartar of recently users here</Text>
            </View>

            <View style={styles.other_options}>
                <Icon name="cog" color="#204bf5" size={25} />
                <Text style={styles.link}>Đăng nhập bằng tài khoản khác</Text>
                <Text style={styles.link}>Đăng ký Facebook</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },

    fb_icon: {
        flex: 2,
        color: "#204BF5",
        fontSize: 40,
        marginTop: 40,
        borderRadius: 10
    },

    list_avatar: {
        flex: 8,
    },

    other_options: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    link: {
        color: "#204BF5",
        marginTop: 20,
        fontSize: 15
    }
})

export { LoginRecentlyAcc };
