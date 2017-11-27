import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { Button } from '../../components/button/button'
import { timeConvert, goToSpeaker } from '../../lib/helpers'
import { getSpeaker } from '../../redux/modules/speaker'
import Heart from '../../components/icons/heart'
import styles from './styles'

const Sessions = ({item, navigatorUID, speaker, faved}) => {
    let id = item.session_id
    return (
        <View style={styles.container} key={id}>
            <Heart location={item.location} faved={faved} />
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{timeConvert(item.start_time)}</Text>
            <MyAppText>{item.description}</MyAppText>
            { speaker &&
            <View>
                <Text style={styles.speakerHeader}>Presented by:</Text>
                <TouchableHighlight onPress={() => goToSpeaker(speaker)}>
                    <View style={styles.speakerContainer}>
                        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
                        <Text style={styles.speakerText}>{speaker.name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            }
            <View style={styles.separator} />
            <Button sessionId={id} faved={faved} />
        </View>
    )
}

export default Sessions