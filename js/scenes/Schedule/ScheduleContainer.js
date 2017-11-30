import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import Schedule from './Schedule'
import NavGradient from '../../components/Gradient'
import { getSchedule } from '../../redux/modules/schedule'
import { queryFavs } from '../../config/module'
import { realm } from '../../config/module'
import { formatSession } from '../../lib/helpers'

class ScheduleContainer extends Component {
    static route = {
        navigationBar:{
            title: "Schedule",
            renderBackground: () => <NavGradient />,
            tintColor: 'white'
        }
    }
    constructor() {
        super()
        this.favIDs = []
    }

    componentDidMount() {
        this.props.dispatch(getSchedule())
        this.favIDs = queryFavs()
        realm.addListener('change', this.updateRealm)
    }

    updateRealm = () => this.favIds = queryFavs()

    componentWillUnmount() {
        realm.removeListener('change', this.updateRealm)
    }

    render() {
        let { navigation, schedule, isLoading } = this.props
        return isLoading ?
            <ActivityIndicator /> 
             : <Schedule schedule={formatSession(schedule)} navigation={navigation} favIDs={this.favIDs} isLoading={isLoading} />
    }
}


const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        schedule: state.schedule.schedule,
        isLoading: state.schedule.isLoading
    }
}

export default connect(mapStateToProps)(ScheduleContainer);