import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Speaker from './Speaker'
class SpeakerContainer extends Component {

    static route = {navigationBar:{title(params){console.log(params); return "speaker info"}}}

    render() {
        console.log(this.props)
        let { isLoading, speakerData } = this.props
        return isLoading ? <ActivityIndicator /> : <ScrollView><Speaker speaker={speakerData} /></ScrollView>
    }
}

const mapStateToProps = state => (
    {
        isLoading: state.speaker.isLoading
    }
)

export default connect(mapStateToProps)(SpeakerContainer);