import React from 'react'
import { TouchableHighlight, Text } from 'react-native';
import { createFav, deleteFav } from '../../config/module'
import styles from './styles'

const FavButton = ({sessionId, faved}) => {
    return (
        <TouchableHighlight onPress={() => dealWithFav(sessionId, faved)} style={styles.favButton}>
            <Text style={styles.buttonText}>{faved[0] ? "Remove From Favs" : "Add To Favs"}</Text>
        </TouchableHighlight>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}

export default FavButton