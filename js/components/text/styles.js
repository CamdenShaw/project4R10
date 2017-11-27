import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    text: {
        fontFamily: typography.fontMainLight,
        fontSize: 15,
        color: 'black',
        lineHeight: 22,
        paddingTop: 10,
        paddingBottom: 10
    },
    header: {
        fontFamily: typography.fontMain,
        fontSize: 22,
        color: 'black',
        paddingTop: 5,
        paddingBottom: 5
    }
})