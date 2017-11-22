import React from 'react';
import { Text, View, SectionList, ListItem, Header } from 'react-native'
import propTypes from 'prop-types'
import moment from 'moment'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { ScheduleHelpers } from '../../lib/helpers'

const EventsList = ({data}) => {
    console.log(data)
    const scheduleHelpers = new ScheduleHelpers();
    const { formatSession, formatObject } = scheduleHelpers
    const session = formatSession(data)
    return (
        <SectionList
            renderItem={({item}) => <View><MyHeaderText>{item.title}</MyHeaderText><MyAppText>{item.location}</MyAppText></View> }
            renderSectionHeader={({section}) => <Text>{moment(section.title).format("hh:mm a")} </Text> }
            sections={session} 
         />
        // data.map(item => {
        //     return (
        //         <View key={item.session_id}>
        //            <MyAppText>{item.start_time}</MyAppText>
        //             <View>
        //                 <MyHeaderText>{item.title}</MyHeaderText>
        //                 <Text>{item.location}</Text>
        //             </View>
        //         </View>
        //     )
        // })
    )
}

export default EventsList