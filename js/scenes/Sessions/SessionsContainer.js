import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Sessions from './Sessions'
import propTypes from 'prop-types'
import { getSpeaker } from '../../redux/modules/speaker'

class SessionsContainer extends Component {
    static route = {navigationBar:{title(params) {return "Session"}}}

    componentWillMount() {
        this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
    }

    render() {
        const { sessionData, navigation, isLoading, speaker } = this.props
        return isLoading ? 
            <ActivityIndicator /> : 
            <ScrollView><Sessions item={sessionData} navigatorUID={navigation} speaker={speaker} /></ScrollView>
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