import { StyleSheet } from "react-native"
import { colours, typography } from "../../config/styles"

export default StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.lightGrey,
        marginTop: 1
    },
    time: {
        backgroundColor: colours.lightGrey,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: typography.fontMain,
        paddingLeft: 10
    },
    text: {
        color: "black",
        fontFamily: typography.fontMain,
        fontSize: 14,
        paddingTop: 10
    },
    container: {
        marginTop: 1,
        paddingLeft: 10
    }
})
