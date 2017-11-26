import { StyleSheet } from 'react-native'
import { colours } from '../../config/styles'

export const styles = StyleSheet.create({
    image: {
        margin: 20,
        padding: 20,
        width: 540/2.8,
        height: 132/2.8,
        justifyContent: "center",
        alignSelf: "center"
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.mediumGrey
    }
})