import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
    image: {
        margin: 20,
        padding: 20,
        width: 200,
        height: 50,
        justifyContent: "center",
        alignSelf: "center"
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.mediumGrey
    }
})