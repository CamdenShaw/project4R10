import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    separator: {
        flex:1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.lightGrey,
        marginTop: 1
    },
    container: {
        margin: 10
    },
    speakerContainer: {
        flex:1, 
        flexDirection: "row", 
        alignItems: "center",
    },
    image: {
        width: 60, 
        height: 60, 
        borderRadius: 30,
        margin: 10,
        marginLeft: 0
    },
    speakerHeader: {
        color: colours.mediumGrey,
        fontFamily: typography.fontMain,
        fontSize: 15
    },
    speakerText: {
        fontFamily: typography.fontMain,
        fontSize: 16
    }
})