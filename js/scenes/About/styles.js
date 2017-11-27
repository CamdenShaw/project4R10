import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    image: {
        margin: 10,
        padding: 20,
        width: 540/2.8,
        height: 132/2.8,
        justifyContent: "center",
        alignSelf: "center"
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.lightGrey,
        marginBottom: 1,
        marginTop: 10
    },
    container: {
        margin: 10
    },
    codeHeader: {
        marginTop: 7,
        marginBottom: 7,
        flex: 1,
        flexDirection: 'row'
    },
    codeHeaderText: {
        fontFamily: typography.fontMain,
        paddingLeft: 3,
        fontSize: 16,
        color: colours.purple,
    },
    codeIcon: {
        textAlign: 'center',
        fontFamily: typography.fontMain,
        color: colours.purple,
        fontSize: 18,
        zIndex: 10000
    }
})