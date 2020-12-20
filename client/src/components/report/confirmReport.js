import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { CommonStyle } from '../auth/sign-up/commonStyle';
import { PostAction } from '../post/redux/action';
import { connect } from 'react-redux';
import { pageName } from '../../navigator/constant.page';

const ConfirmReport = (props) => {
    const optionArr = ["Ảnh khỏa thân", "Bạo lực", "Quấy rối", "Tự tử/Tự gây thương tích", "Tin giả", "Spam", "Bán hàng trái phép", "Ngôn từ gây thù ghét", "Khủng bố", "Vấn đề khác"];
    const idx = props.route.params.option;
    const onPressReport = () => {
        let data = {
            described: optionArr[idx]
        }
        props.reportPost("5fdde5348156a30017bfe759", data)
        props.navigation.navigate(pageName.main.MAIN)
    }
    return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={styles.listChose}>
                <Icon name="report" style={styles.reportIcon}></Icon>

                <Text style={{ fontSize: 16, fontWeight: "700", margin: 10 }}>Bạn đã chọn</Text>

                <Text style={{ fontSize: 16, fontWeight: "700", color: "#1577F2", marginBottom: 5 }}>{optionArr[idx]}</Text>
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
                onPress={onPressReport}
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

const mapStateToProps = state => {
    const { post } = state;
    return { post };
}
const mapActions = {
    reportPost: PostAction.reportPost,
}
let connected = connect(mapStateToProps, mapActions)(ConfirmReport);

export { connected as ConfirmReport }
