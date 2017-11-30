import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'

import MyHeaderText from '../../components/MyHeaderText'
import MyAppText from '../../components/MyAppText'
import Heart from '../../components/HeartIcon'
import Button from '../../components/Button'
import { timeConvert, goToSpeaker } from '../../lib/helpers'
import styles from './styles'
import { colours } from '../../config/styles.js'

const Sessions = ({item, navigatorUID, speaker, faved, dealWithFav, buttonText}) => {
    let id = item.session_id
    console.log(item.location, faved)
    return (
        <View style={styles.container} key={id}>
            <Heart location={item.location} faved={faved} />
            <MyHeaderText>{item.title}</MyHeaderText>
            <Text>{timeConvert(item.start_time)}</Text>
            <MyAppText>{item.description}</MyAppText>
            { speaker &&
            <View>
                <Text style={styles.speakerHeader}>Presented by:</Text>
                <TouchableHighlight underlayColor={colours.lightGrey} onPress={() => goToSpeaker(speaker)}>
                    <View style={styles.speakerContainer}>
                        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
                        <Text style={styles.speakerText}>{speaker.name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            }
            <View style={styles.separator} />
            <Button handlePress={dealWithFav} text={buttonText} />
        </View>
    )
}

export default Sessions