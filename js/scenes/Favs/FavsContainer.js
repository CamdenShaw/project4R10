import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Favs from './Favs'
import NavGradient from '../../components/Gradient'
import { getSchedule } from '../../redux/modules/schedule'
import { realm, queryFavs } from '../../config/module'
import { formatSession } from '../../lib/helpers'

class FavsContainer extends Component {
    static route = {
        navigationBar:{
            title: "Favourites",
            renderBackground: () => <NavGradient />,
            tintColor: 'white'
        }
    }
    constructor(){
        super()
        this.favs = []
    }

    componentWillMount() {
        this.props.dispatch(getSchedule())
        this.queryForFavs()
        realm.addListener('change', this.queryForFavs)
    }

    componentWillUpdate() {
        this.queryForFavs()
    }

    componentWillUnmount() {
        realm.removeListener('change', this.queryForFavs)
    }

    queryForFavs = () => {
        let favIds = queryFavs()
        this.favs = []
        favIds.forEach(id => {
            this.props.schedule.filter(session => {
                session.session_id === id.id  && this.favs.push(session)
            })
        })
    }

    render() {
        let { navigation, schedule, isLoading } = this.props
        return isLoading ?
            <ActivityIndicator /> 
             :  <Favs navigation={navigation} isLoading={isLoading} favs={formatSession(this.favs)} />
    }
}


const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        schedule: state.schedule.schedule,
        isLoading: state.schedule.isLoading
    }
}

export default connect(mapStateToProps)(FavsContainer);