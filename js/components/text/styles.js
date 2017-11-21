import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

const styles = StyleSheet.create({
    text: {
        fontFamily: typography.fontMain,
        fontSize: 16,
        color: colours.red
    },
    header: {
        fontFamily: typography.fontMain,
        fontSize: 20,
        color: colours.blue
    }
})

export default styles