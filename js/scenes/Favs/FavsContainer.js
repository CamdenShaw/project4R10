import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import propTypes from 'prop-types'
import EventsList from '../../components/eventsList'
import { getSchedule } from '../../redux/modules/schedule'
import MyAppText from '../../components/text/MyAppText'
import { queryFavs } from '../../config/module'

class ScheduleContainer extends Component {
    static route = {navigationBar:{title: "Schedule"}}
    constructor(){
        super()
        this.favs = []
    }

    componentWillMount() {
        this.props.dispatch(getSchedule())
        let favIds = queryFavs()
        favIds.forEach(id => {
            let x = this.props.schedule.filter(session => {
                console.log(session.session_id, id.id)
                session.session_id === id.id  && this.favs.push(session)
            })
        })
        console.log(this.favs)
    }

    render() {
        const { schedule, isLoading, navigation } = this.props
        console.log(this.favs)
        return isLoading ?
            <ActivityIndicator /> :
            <ScrollView><EventsList data={this.favs} navigatorUID={navigation} /></ScrollView>
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