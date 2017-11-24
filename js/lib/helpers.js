import React, { Component } from 'react';
import{ NavigationActions } from '@expo/ex-navigation'
import Store from '../redux/store'
import Router from '../navigation/routes'
import moment from 'moment'

class ScheduleHelpers extends Component {
    formatObject = (data) => {
        const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
        return dataObject[0]
    }

    formatSession = (sessions) => {
        console.log(sessions)
        return sessions.reduce((acc, curr) => {
            const timeExists = acc.find(section => section.title === curr.start_time)
            timeExists ? timeExists.data.push(curr) : acc.push({title: curr.start_time, data: [curr]})
            return acc
        }, [].sort((a ,b) => a.title - b.title))
    }
}

const goToSession = (currentNavigatorUID, sessionData) => {
    Store.dispatch(NavigationActions.push(
        currentNavigatorUID,
        Router.getRoute('session', { sessionData })
    ))
}

const goToSpeaker = (speakerData) => {
    Store.dispatch(NavigationActions.push(
        'root',
        Router.getRoute('speaker', { speakerData })
    ))
}

const timeConvert = (unixTime) => {
    return moment.unix(unixTime).format("hh:mm a")
}

export { ScheduleHelpers, goToSession, goToSpeaker, timeConvert }