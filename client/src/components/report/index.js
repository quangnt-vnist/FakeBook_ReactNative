import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { CommonStyle } from '../auth/sign-up/commonStyle';
import { pageName } from '../../navigator/constant.page';
import Modal from 'react-native-modal';

const ReportPost = ({ navigation }) => {
    const [option, setOption] = useState(-1);
    const [choose, setChoose] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onChooseOption = (index) => {
        setChoose(true);
        setOption(index);
    }
    const onBlockUser = () => {
        setIsVisible(true);

    }
    const onPressBtnNext = () => {
        setIsVisible(false);
        navigation.navigate(pageName.report.CONFIRM_REPORT, { option: option })
    }

    return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View >

                {/* Modal chan nguoi dung */}
                {/* <Modal
                    isVisible={isVisible}
                    backdropOpacity={0.5}
                >
                    <View style={{ backgroundColor: "#fff" }}>
                        <Text>Checker four</Text>
                    </View>
                </Modal> */}
                {/* End: Modal chan nguoi dung */}

                <View style={{ marginLeft: "3%" }}>
                    <Icon name="report" style={styles.reportIcon}></Icon>

                    <Text style={{ fontSize: 18, fontWeight: "700" }}>Vui lòng chọn vấn đề để tiếp tục</Text>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#555" }} >Bạn có thể báo cáo bài viết sau khi chọn vẫn đề.</Text>
                </View>
                <View style={styles.reportOptions}>

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 0 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 110 }}
                            onPress={
                                () => onChooseOption(0)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Ảnh khỏa thân</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 1 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 70 }}
                            onPress={
                                () => onChooseOption(1)
                            }

                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Bạo lực</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 2 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 70 }}
                            onPress={
                                () => onChooseOption(2)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Quấy rối</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 3 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 180 }}
                            onPress={
                                () => onChooseOption(3)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Tự tử/Tự gây thương tích</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 4 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 60 }}
                            onPress={
                                () => onChooseOption(4)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Tin giả</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 5 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 60 }}
                            onPress={
                                () => onChooseOption(5)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Spam</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 6 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 140 }}
                            onPress={
                                () => onChooseOption(6)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Bán hàng trái phép</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 7 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 155 }}
                            onPress={
                                () => onChooseOption(7)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Ngôn từ gây thù ghét</Text>
                        </TouchableWithoutFeedback>

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 8 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 80 }}
                            onPress={
                                () => onChooseOption(8)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Khủng bố</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            style={{ backgroundColor: `${option === 9 ? "#1577F2" : "#CCC"}`, padding: 8, borderRadius: 20, margin: 5, width: 100 }}
                            onPress={
                                () => onChooseOption(9)
                            }
                        >
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Vấn đề khác</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.more}>
                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 15, marginBottom: 15 }}>Các bước khác mà bạn có thể thực hiện</Text>


                    <TouchableWithoutFeedback
                        onPress={onBlockUser}
                    >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Icon2 name="block" style={{ fontSize: 20, marginRight: 10, marginTop: 5 }}></Icon2>
                            <View>
                                <Text style={{ fontSize: 16 }}>Chặn UserName</Text>
                                <Text style={{ fontSize: 14, color: "#555" }}>Các bạn sẽ không thể nhìn thấy hoặc liên hệ với nhau.</Text>
                            </View>
                        </View>

                    </TouchableWithoutFeedback>

                    <View style={styles.info}>
                        <Icon2 name="info-with-circle" style={{ fontSize: 18, marginRight: 10, marginTop: 5, color: "#777" }}></Icon2>
                        <Text style={{ fontSize: 14, color: "#555", width: "95%" }}>
                            Nếu bạn nhận thấy ai đó đang gặp nguy hiểm, đừng chần chừ mà hãy báo ngay cho dịch vụ cấp cứu tại địa phương.
                        </Text>
                    </View>


                </View>
                <TouchableOpacity
                    disabled={!choose}
                    activeOpacity={0.5}
                    style={[CommonStyle.submitBtn, { backgroundColor: `${choose ? "#1577F2" : "#CCC"}`, width: "94%", marginLeft: "3%" }]}
                    onPress={onPressBtnNext}
                >
                    <Text style={[CommonStyle.textBtn, { color: `${choose ? "#fff" : "#999"}` }]}>Tiếp</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >

    )
}
// const blockUserModal = ()=>{
//     return (

//     )
// }
const styles = StyleSheet.create({

    reportOptions: {
        paddingBottom: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingLeft: 5
    },
    reportIcon: {
        color: "orange",
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

export { ReportPost }
