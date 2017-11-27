import React from 'react'
import { Text, Image, View } from 'react-native';
import Button from '../../components/button/wikiButton'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import styles from './styles'

const Speaker = ({speaker}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: speaker.image}} />
            <MyHeaderText>{speaker.name}</MyHeaderText>
            <MyAppText>{speaker.bio}</MyAppText>
            <Button URL={speaker.url} />
        </View>
    )
}

export default Speaker