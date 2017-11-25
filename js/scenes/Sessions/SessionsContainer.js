import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Sessions from './Sessions'
import propTypes from 'prop-types'
import { getSpeaker } from '../../redux/modules/speaker'
import { queryFavs, realm } from '../../config/module'

class SessionsContainer extends Component {
    static route = {navigationBar:{title(params) {return "Session"}}}
    constructor() {
        super()
        this.faved = []
    }

    componentWillMount() {
        this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
        realm.addListener('change', this.updateRealm)
    }

    updateRealm = () => this.forceUpdate()

    componentWillUnmount() {
        realm.removeListener('change', this.updateRealm)
    }

    render() {
        const { sessionData, navigation, isLoading, speaker } = this.props
        if(!isLoading) { this.faved = queryFavs(sessionData.session_id)}
        return isLoading ? 
            <ActivityIndicator /> : 
            <ScrollView><Sessions item={sessionData} navigatorUID={navigation} speaker={speaker} faved={this.faved} /></ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        isLoading: state.sessions.isLoading,
        speaker: state.speaker.speaker
    }
}

export default connect(mapStateToProps)(SessionsContainer)