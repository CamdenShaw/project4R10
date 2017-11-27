import { StyleSheet } from 'react-native'
import { colours, typography } from '../../config/styles'

export default StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        width: 310,
        padding: 6,
        marginTop: 10
    },
    image: {
        width:100, 
        height:100,
        borderRadius: 50
    }
})