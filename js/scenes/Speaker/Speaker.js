import React from 'react'
import { Text, Image, View } from 'react-native';
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'

const Speaker = ({speaker}) => {
    return (
        <View>
            <Image style={{width:100, height:100}} source={{uri: speaker.image}} />
            <MyHeaderText>{speaker.name}</MyHeaderText>
            <MyAppText>{speaker.bio}</MyAppText>
            <Text>{speaker.url}</Text>
        </View>
    )
}

export default Speaker