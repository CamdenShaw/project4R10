import React from 'react';
import { Text, View, Image, TouchableHighlight, Button } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { timeConvert, goToSpeaker } from '../../lib/helpers'
import { getSpeaker } from '../../redux/modules/speaker'
import { createFav, deleteFav } from '../../config/module'
import Heart from '../../components/icons/heart'

const Sessions = ({item, navigatorUID, speaker, faved}) => {
    let id = item.session_id
    return (
        <View key={id}>
            <Heart location={item.location} />
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{timeConvert(item.start_time)}</Text>
            <MyAppText>{item.description}</MyAppText>
            { speaker &&
            <View>
                <Text>Presented by:</Text>
                <TouchableHighlight onPress={() => goToSpeaker(speaker)}>
                    <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
                        <Image style={{width:60, height:60, borderRadius: 30}} source={{uri: `${speaker.image}`}} />
                        <Text>{speaker.name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            }
            <Button title={ faved[0] ? "Remove From Favs" : "Add to Favs" } onPress={() => dealWithFav(id, faved)}/>
        </View>
    )
}

const dealWithFav = (id, faved) => {
    faved[0] ? deleteFav(id) : createFav(id)
}

export default Sessions