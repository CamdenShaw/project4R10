import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../../components/Loader'
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
        let { navigation, isLoading } = this.props
        return isLoading ?
            <Loader /> 
             :  <Favs navigation={navigation} isLoading={isLoading} favs={formatSession(this.favs)} />
    }
}

FavsContainer.defaultProps = {
    dispatch: () => 1-1,
    schedule: [],
    navigation: '',
    isLoading: Boolean
}

FavsContainer.propTypes = {
    dispatch: PropTypes.func,
    schedule: PropTypes.array,
    navigation: PropTypes.string,
    isLoading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        schedule: state.schedule.schedule,
        isLoading: state.schedule.isLoading
    }
}

export default connect(mapStateToProps)(FavsContainer);