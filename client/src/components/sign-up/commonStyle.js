import { StyleSheet } from "react-native";

export const CommonStyle = StyleSheet.create({
    row_90: {
        flex: 1,
        width: '90%',
        marginLeft: '5%'
    },

    submitBtn: {
        backgroundColor: "#1877f2",
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center"
    },

    textSubmit: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FFF",
        textAlign: "center"
    },

    mediumBlueText: {
        display: "flex",
        fontSize: 20,
        fontWeight: "700",
        color: "#204BF5",
        textAlign: "center",
    },

    smallBlueText: {
        display: "flex",
        fontSize: 14,
        fontWeight: "600",
        color: "#204BF5",
        textAlign: "center",
    },

    footerQuestion: {
        borderTopColor: "#CCC",
        borderTopWidth: 1,
        padding: 10
    }

})