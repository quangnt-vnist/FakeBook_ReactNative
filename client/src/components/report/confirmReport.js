import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { CommonStyle } from '../sign-up/commonStyle';

const ConfirmReport = () => {
    return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={styles.listChose}>
                <Icon name="report" style={styles.reportIcon}></Icon>

                <Text style={{ fontSize: 16, fontWeight: "700", margin: 10 }}>Bạn đã chọn</Text>
                <TouchableWithoutFeedback
                    style={{ backgroundColor: "#1577F2", padding: 8, borderRadius: 20, margin: 5, width: 55 }}
                >
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>Spam</Text>
                </TouchableWithoutFeedback>
                <Text style={{ fontSize: 16, fontWeight: "500", color: "#555", textAlign: "center" }} >Ý kiến đóng góp của bạn giúp hệ thống của chúng tôi biết khi có gì đó không ổn.</Text>
            </View>

            <View style={styles.more}>
                <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 15, marginBottom: 15 }}>Các bước khác mà bạn có thể thực hiện</Text>

                <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                    <Icon2 name="block" style={{ fontSize: 20, marginRight: 10, marginTop: 5 }}></Icon2>
                    <View>
                        <Text style={{ fontSize: 16 }}>Chặn UserName</Text>
                        <Text style={{ fontSize: 14, color: "#555" }}>Các bạn sẽ không thể nhìn thấy hoặc liên hệ với nhau.</Text>

                    </View>
                </View>
                {/* <View style={styles.info}>
                    <Icon2 name="info-with-circle" style={{ fontSize: 18, marginRight: 10, marginTop: 5, color: "#777" }}></Icon2>
                    <Text style={{ fontSize: 14, color: "#555", width: "95%" }}>
                        Nếu bạn nhận thấy ai đó đang gặp nguy hiểm, đừng chần chừ mà hãy báo ngay cho dịch vụ cấp cứu tại địa phương.
                        </Text>
                </View> */}


            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[CommonStyle.submitBtn, { width: "94%", marginLeft: "3%" }]}
            // onPress={onPressBtnNext}
            >
                <Text style={[CommonStyle.textBtn]}>Xong</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({


    listChose: {
        paddingBottom: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginLeft: "10%",
        width: "80%",
        alignItems: "center"
    },
    reportIcon: {
        backgroundColor: "orange",
        borderRadius: 25,
        width: 50,
        padding: 15,
        color: "#fff",
        fontSize: 20,
        marginTop: 10,
    },
    info: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#555",
        padding: 15,
        marginRight: "3%",
        marginTop: 15,
        marginBottom: 15

    },

    more: {
        paddingLeft: "3%",
    },


})

export { ConfirmReport }
