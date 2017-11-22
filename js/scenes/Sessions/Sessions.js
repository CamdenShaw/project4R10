import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { timeConvert, goToSpeaker } from '../../lib/helpers'

const Sessions = ({item, navigatorUID}) => {
    console.log(item)
    return (
        <View key={item.session_id}>
            <Text>{item.location}</Text>
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{timeConvert(item.start_time)}</Text>
            <MyAppText>{item.description}</MyAppText>
            <Text>Presented by:</Text>
            <TouchableHighlight onPress={() => goToSpeaker(navigatorUID, item.speaker)}>
                <View>
                    <Image source={item.speaker} />
                    <Text>{item.speaker}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Sessions