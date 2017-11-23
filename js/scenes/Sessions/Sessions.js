import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { timeConvert, goToSpeaker } from '../../lib/helpers'
import { getSpeaker } from '../../redux/modules/speaker'

const Sessions = ({item, navigatorUID, speaker}) => {
    return (
        <View key={item.session_id}>
            <Text>{item.location}</Text>
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{timeConvert(item.start_time)}</Text>
            <MyAppText>{item.description}</MyAppText>
            <Text>Presented by:</Text>
            <TouchableHighlight onPress={() => goToSpeaker(speaker)}>
                <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width:60, height:60, borderRadius: 30}} source={{uri: `${speaker.image}`}} />
                    <Text>{speaker.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Sessions