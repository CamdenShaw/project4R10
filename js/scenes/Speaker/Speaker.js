import React from 'react'
import { Text, Image, View, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Button from '../../components/Button'
import MyAppText from '../../components/MyAppText'
import MyHeaderText from '../../components/MyHeaderText'
import styles from './styles'
import { colours } from '../../config/styles'

const Speaker = ({speaker, goBack, wiki}) => {
    return (
        <View>
            <View style={styles.header}>
                <TouchableHighlight underlayColor={colours.lightGrey} onPress={goBack} >
                    <Icon size={25} color='white' name='md-close' />
                </TouchableHighlight>
                <Text style={styles.headerText}>About the Speaker</Text>
            </View>
            <ScrollView style={{backgroundColor: 'black'}} contentContainerStyle={styles.page}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: speaker.image}} />
                    <MyHeaderText>{speaker.name}</MyHeaderText>
                    <MyAppText>{speaker.bio}</MyAppText>
                    <Button handlePress={wiki} text="Read More on Wikipedia" />
                </View>
            </ScrollView>
        </View>
    )
}

export default Speaker