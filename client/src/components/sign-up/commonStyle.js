import { StyleSheet } from "react-native";

export const CommonStyle = StyleSheet.create({
    row_90: {
        flex: 1,
        width: '90%',
        marginLeft: '5%'
    },

    // Font chữ 15 màu đen xám để thể hiện content
    content: {
        margin: 10,
        fontSize: 15,
        textAlign: "center",
        color: "#4A4A4A"
    },

    // Nút xác nhận mặc định màu blue, width 100%
    submitBtn: {
        backgroundColor: "#204BF5",
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",

    },

    // Font chữ 20 mặc định là màu blue
    mediumText: {
        display: "flex",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        color: "#204BF5"
    },

    // Font chữ 14 mặc định là màu blue
    smallText: {
        display: "flex",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        color: "#204BF5"
    },

    // Footer phần tạo tài khoản
    footerQuestion: {
        borderTopColor: "#CCC",
        borderTopWidth: 1,
        padding: 10
    }

})