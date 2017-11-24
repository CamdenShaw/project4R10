import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { ScheduleHelpers, goToSession, timeConvert } from '../../lib/helpers'
import Heart from '../icons/heart'

const EventsList = ({data, navigatorUID}) => {
    const scheduleHelpers = new ScheduleHelpers();
    const { formatSession } = scheduleHelpers
    const session = formatSession(data)
    return (
        <SectionList
            renderItem={({item}) => 
                <TouchableHighlight onPress={() => goToSession(navigatorUID, item)}>
                    <View>
                        <MyHeaderText>{item.title}</MyHeaderText>
                        <Heart location={item.location} />
                    </View>
                </TouchableHighlight> 
            }
            renderSectionHeader={({section}) => <Text>{timeConvert(section.title)}</Text> }
            sections={session}
            keyExtractor={item => item.session_id}
         />
    )
}

export default EventsList