import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'

import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { ScheduleHelpers, goToSession, timeConvert } from '../../lib/helpers'
import Heart from '../icons/heart'
import { queryFavs } from '../../config/module'
import styles from './styles'

const EventsList = ({data, navigatorUID, favs = null}) => {
    const scheduleHelpers = new ScheduleHelpers();
    const { formatSession } = scheduleHelpers
    const session = formatSession(data)
    return (
        <SectionList
            renderItem={({item}) => 
                <TouchableHighlight onPress={() => goToSession(navigatorUID, item)}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Heart faved={queryFavs(item.session_id)} location={item.location} />
                        <View style={styles.separator} />
                    </View>
                </TouchableHighlight> 
            }
            renderSectionHeader={({section}) => <Text style={styles.time}>{timeConvert(section.title)}</Text> }
            sections={session}
            keyExtractor={item => item.session_id}
         />
    )
}

export default EventsList