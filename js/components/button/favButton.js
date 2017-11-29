import React from 'react'
import { TouchableHighlight, Text } from 'react-native';
import { createFav, deleteFav } from '../../config/module'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { colours } from '../../config/styles'

const FavButton = ({sessionId, faved}) => {
    return (
        <TouchableHighlight onPress={() => dealWithFav(sessionId, faved)} style={styles.favButton}>
            <LinearGradient
                colors={[colours.purple, colours.blue]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.buttonGradient} 
             >
                <Text style={styles.buttonText}>{faved[0] ? "Remove From Favs" : "Add To Favs"}</Text>
            </LinearGradient>
        </TouchableHighlight>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}

export default FavButton