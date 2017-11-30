import React from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'

import EventsList from '../../components/EventsList'

const ScheduleContainer = ({ schedule, navigation, favIDs, isLoading }) => {

    return (
        schedule.length > 0 ? 
            <ScrollView>
                <EventsList data={schedule} favs={favIDs} navigatorUID={navigation} />
            </ScrollView>
         :  <ActivityIndicator />
        )
}

export default ScheduleContainer