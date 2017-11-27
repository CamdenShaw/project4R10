import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    button: {
        backgroundColor: colours.purple,
        padding: 10,
        marginLeft: 55,
        marginRight: 55,
        marginTop: 10,
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: typography.fontMain,
    }
})