import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default {
    heartContainer: {
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        fontFamily: typography.fontMain,
        color: colours.mediumGrey,
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10
    },
    icon: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10
    }
}