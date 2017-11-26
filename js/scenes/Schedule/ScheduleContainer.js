import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import propTypes from 'prop-types'
import EventsList from '../../components/eventsList'
import { getSchedule } from '../../redux/modules/schedule'
import MyAppText from '../../components/text/MyAppText'
import { queryFavs } from '../../config/module'
import { realm } from '../../config/module'
import { updateRealm } from '../../lib/helpers'

class ScheduleContainer extends Component {
    static route = {navigationBar:{title: "Schedule"}}
    constructor() {
        super()
        this.favIDs = []
    }

    componentDidMount() {
        this.props.dispatch(getSchedule())
        this.favIds = queryFavs()
        realm.addListener('change', this.updateRealm)
    }

    updateRealm = () => this.favIds = queryFavs()

    componentWillUnmount() {
        realm.removeListener('change', this.updateRealm)
    }

    render() {
        const { schedule, isLoading, navigation } = this.props
        return isLoading ?
            <ActivityIndicator /> :
            <ScrollView><EventsList data={schedule} favs={this.favIds} navigatorUID={navigation} /></ScrollView>
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