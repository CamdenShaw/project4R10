import React from 'react'
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles'
import { createFav, deleteFav } from '../../config/module'

export const Button = ({sessionId, faved}) => {
    return (
        <TouchableHighlight onPress={() => dealWithFav(sessionId, faved)} style={styles.button}>
            <Text style={styles.buttonText}>{faved[0] ? "Remove From Favs" : "Add To Favs"}</Text>
        </TouchableHighlight>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}