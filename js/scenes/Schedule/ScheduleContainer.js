import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import propTypes from 'prop-types'
import EventsList from '../../components/eventsList'
import { getSchedule } from '../../redux/modules/schedule'
import MyAppText from '../../components/text/MyAppText'

class ScheduleContainer extends Component {
    static route = {navigationBar:{title: "Schedule"}}

    componentDidMount() {
        this.props.dispatch(getSchedule())
    }

    render() {
        const { schedule, isLoading, navigation } = this.props
        return isLoading ?
            <ActivityIndicator /> :
            <ScrollView><EventsList data={schedule} navigatorUID={navigation} /></ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        schedule: state.schedule.schedule,
        isLoading: state.schedule.isLoading
    }
}

export default connect(mapStateToProps)(ScheduleContainer)