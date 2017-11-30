import { StyleSheet } from "react-native"
import { typography } from "../../config/styles"

export default StyleSheet.create({
    iosText: {
        fontFamily: typography.fontMain,
        fontSize: 10
    },
    androidText: {
        fontFamily: typography.fontMain,
        paddingLeft: 10,
        fontSize: 14
    }
})
