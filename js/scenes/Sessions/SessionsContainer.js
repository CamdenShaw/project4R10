import React, { Component } from 'react';
import { connect } from 'reac-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Sessions from './Sessions'
import propTypes from 'prop-types'
import { getSessions } from '../../redux/modules/sessions'
import MyAppText from '../../components/text/MyAppText'

class SessionsContainer extends Component {
    static route = {navigationBar:{title: "Sessions"}}

    componentDidMount() {
        this.props.dispatch(getSessions())
    }

    render() {
        const { sessions, isLoading } = this.props
        return isLoading ?
            <ActivityIndicator /> :
            <ScrollView><Sessions data={sessions} /></ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        sessions: state.sessions.sessions,
        isLoading: state.sessions.isLoading
    }
}

export default connect(mapStateToProps)(SessionsContainer)