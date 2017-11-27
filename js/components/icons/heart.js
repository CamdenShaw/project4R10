import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { colours } from '../../config/styles'
import { Platform, View, Text } from 'react-native';
import styles from './styles'

const Heart = ({location, faved}) => {

    let style = { display: 'none', ...styles.icon }

    if(faved[0]) style = { display: 'flex', ...styles.icon }

    return (
        <View style={styles.heartContainer}>
            <Text style={styles.text}>{location}</Text>
            <Icon 
                style={style}
                size={17} 
                name={Platform.OS === 'ios' ? "ios-heart" : "md-heart"} 
                color={colours.red} 
             />
        </View>
    )
}

export default Heart