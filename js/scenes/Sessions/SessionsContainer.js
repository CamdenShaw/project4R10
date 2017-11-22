import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Sessions from './Sessions'
import propTypes from 'prop-types'
import { getSessions } from '../../redux/modules/sessions'

class SessionsContainer extends Component {
    static route = {navigationBar:{title(params) {return `${params}`}}}

    render() {
        const { sessionData, navigation } = this.props
        return <ScrollView><Sessions item={sessionData} navigatorUID={navigation} /></ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        isLoading: state.sessions.isLoading
    }
}

export default connect(mapStateToProps)(SessionsContainer)