import React from 'react'
import { Text, Image, View, Button, Linking } from 'react-native';
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'

const Speaker = ({speaker}) => {
    return (
        <View>
            <Image style={{width:100, height:100}} source={{uri: speaker.image}} />
            <MyHeaderText>{speaker.name}</MyHeaderText>
            <MyAppText>{speaker.bio}</MyAppText>
            <Button title="More Info" onPress={() => Linking.openURL(speaker.url)} />
        </View>
    )
}

const moreInfo = (url) => (
    //TODO link to url
    1+1
)

export default Speaker