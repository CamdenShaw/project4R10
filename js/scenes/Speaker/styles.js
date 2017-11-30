import { StyleSheet } from "react-native"
import { typography } from "../../config/styles"

export default StyleSheet.create({
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "white",
        width: 310,
        padding: 6,
        marginTop: 10,
        marginBottom: 90
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-end",
        height: 80,
        width: "100%",
        paddingLeft: 10,
        backgroundColor: "black"
    },
    headerText: {
        color: "white",
        fontFamily: typography.fontMain,
        fontSize: 20,
        paddingLeft: "14%",
        paddingBottom: 5
    }
})
