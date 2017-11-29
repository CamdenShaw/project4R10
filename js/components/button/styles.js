import { StyleSheet } from 'react-native'
import { typography } from '../../config/styles'

export default StyleSheet.create({
    favButton: {
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
        backgroundColor: 'transparent'
    },
    wikiButton: {
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 12,
        margin: 20,
        borderRadius: 30
    },
    buttonGradient: {
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 30
    }
})