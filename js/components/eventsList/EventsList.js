import React from 'react';
import { Text, View } from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'

const EventsList = ({data}) => {
    console.log(data)
    return (
        data.map(item => {
            return (
                <View key={item.session_id}>
                   <MyAppText>{item.start_time}</MyAppText>
                    <View>
                        <MyHeaderText>{item.title}</MyHeaderText>
                        <Text>{item.location}</Text>
                    </View>
                </View>
            )
        })
    )
}

export default EventsList