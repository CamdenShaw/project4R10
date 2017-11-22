import React, { Component } from 'react';

class ScheduleHelpers extends Component {
    formatObject = (data) => {
        const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
        return dataObject[0]
    }

    formatSession = (sessions) => {
        return sessions.reduce((acc, curr) => {
            const timeExists = acc.find(section => section.title === curr.start_time)
            timeExists ? timeExists.data.push(curr) : acc.push({title: curr.start_time, data: [curr]})
            return acc
        }, [].sort((a ,b) => a.title - b.title))
    }
}

export { ScheduleHelpers }