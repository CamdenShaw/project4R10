import React from 'react'
import { TouchableHighlight, Text, Linking } from 'react-native';
import { createFav, deleteFav } from '../../config/module'
import styles from './styles'

const WikiButton = ({URL}) => {
    return (
        <TouchableHighlight onPress={() => Linking.openURL(URL)}  style={styles.wikiButton}>
            <Text style={styles.buttonText}>Read More on Wikipedia</Text>
        </TouchableHighlight>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}

export default WikiButton