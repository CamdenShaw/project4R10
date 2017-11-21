import React, { Component } from 'react';

import MyAppText from "../../components/text/MyAppText"

class ScheduleContainer extends Component {
    static route = {navigationBar:{title: "Schedule"}}
    state = {  }
    render() {
        return (
            <MyAppText>Schedule</MyAppText>
        );
    }
}

export default ScheduleContainer;