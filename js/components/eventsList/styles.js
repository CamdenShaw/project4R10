import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    separator: {
        flex:1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.lightGrey,
        marginTop: 1
    },
    time: {
        backgroundColor: colours.lightGrey,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        fontFamily: typography.fontMain,
    },
    text: {
        color: 'black',
        fontFamily: typography.fontMain,
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 10
    },
    container: {
        marginTop: 1,
    }
})