import { StyleSheet } from "react-native"
import { typography } from "../../config/styles"

export default StyleSheet.create({
    button: {
        marginTop: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        fontFamily: typography.fontMain,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "transparent"
    },
    buttonGradient: {
        borderRadius: 30
    }
})
