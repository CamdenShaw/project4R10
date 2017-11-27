import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Speaker from './Speaker'
import styles from './styles'

class SpeakerContainer extends Component {

    static route = {navigationBar:{title(params){ return "speaker info" }}}

    render() {
        let { isLoading, speakerData } = this.props
        return isLoading ? <ActivityIndicator /> : <ScrollView style={{backgroundColor: 'black'}} contentContainerStyle={styles.page}><Speaker speaker={speakerData} /></ScrollView>
    }
}

const mapStateToProps = state => (
    {
        isLoading: state.speaker.isLoading
    }
)

export default connect(mapStateToProps)(SpeakerContainer);