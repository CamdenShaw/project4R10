import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, Linking } from 'react-native'
import { NavigationStyles } from '@expo/ex-navigation'

import Speaker from './Speaker'

class SpeakerContainer extends Component {

    static route = {
        navigationBar:{
            title(params){return},
            visible: false,
        },
        styles: {
                ...NavigationStyles.SlideVertical
        }
    }

    goBack = () => {
        this.props.navigator.pop()
    }

    wiki = () => {
        Linking.openURL(thisprops.speakerData.url)
    }

    render() {
        let { isLoading, speakerData } = this.props
        return isLoading ? 
            <ActivityIndicator /> 
             :  <Speaker wiki={this.wiki} speaker={speakerData} goBack={this.goBack} />
    }
}

const mapStateToProps = state => (
    {
        isLoading: state.speaker.isLoading
    }
)

export default connect(mapStateToProps)(SpeakerContainer);