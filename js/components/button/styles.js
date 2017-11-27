import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    favButton: {
        backgroundColor: colours.purple,
        paddingTop: 12,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 12,
        marginLeft: 54,
        marginRight: 54,
        marginTop: 10,
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: typography.fontMain,
    },
    wikiButton: {
        backgroundColor: colours.purple,
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 12,
        margin: 20,
        borderRadius: 30
    },
})