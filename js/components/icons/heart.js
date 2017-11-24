import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { colours } from '../../config/styles'
import { Platform, View, Text } from 'react-native';

const Heart = ({location}) => {
    return (
        
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{location}</Text>
            <Icon 
                size={20} 
                name={Platform.OS === 'ios' ? "ios-heart" : "md-heart"} 
                color={colours.red} 
             />
        </View>
    )
}

export default Heart