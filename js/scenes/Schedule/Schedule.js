import React from "react"
import { ScrollView } from "react-native"

import EventsList from "../../components/EventsList"
import Loader from "../../components/Loader"

const ScheduleContainer = ({ schedule, navigation, favIDs, isLoading }) => {
    return schedule.length > 0 ? (
        <ScrollView>
            <EventsList data={schedule} favs={favIDs} navigatorUID={navigation} />
        </ScrollView>
    ) : (
        <Loader />
    )
}

export default ScheduleContainer
