import React from 'react'
import { TouchableHighlight, Text, Linking } from 'react-native';
import { createFav, deleteFav } from '../../config/module'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { colours } from '../../config/styles'

const WikiButton = ({URL}) => {
    return (
        <TouchableHighlight underlayColor={colours.lightGrey} onPress={() => Linking.openURL(URL)} >
            <LinearGradient 
                colors={[colours.purple, colours.blue]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.buttonGradient} 
             >
                <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </LinearGradient>
        </TouchableHighlight>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}

export default WikiButton