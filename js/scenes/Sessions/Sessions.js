import React from 'react';
import { Text, View, Image } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'

const EventsList = ({data}) => {
    return (
        data.map(item => {
        <View key={item.session_id}>
            <Text>{item.location}</Text>
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{item.start_time}</Text>
            <MyAppText>{item.description}</MyAppText>
            <Text>Presented by:</Text>
            <Image source={item.speaker} />
            <Text>{item.speaker}</Text>
        </View>
        })
    )
}