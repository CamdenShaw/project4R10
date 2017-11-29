import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView, View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Speaker from './Speaker'
import styles from './styles'
import colours from '../../config/styles'

import { NavigationStyles, withNavigation } from '@expo/ex-navigation';

@withNavigation
class SpeakerContainer extends Component {

    static route = {
        navigationBar:{
            title(params){console.log(this)},
            visible: false,
            styles: {
                    ...NavigationStyles.SlideVertical
            }
        }
    }

    goBack = () => {
        this.props.navigator.pop()
        console.log(this.props.navigator)
    }

    render() {
        let { isLoading, speakerData } = this.props
        return isLoading ? <ActivityIndicator /> :
            <View>
                <View style={styles.header}>
                    <TouchableHighlight underlayColor={colours.lightGrey} onPress={this.goBack} >
                        <Icon size={25} color='white' name='md-close' />
                    </TouchableHighlight>
                    <Text style={styles.headerText}>About the Speaker</Text>
                </View>
                <ScrollView style={{backgroundColor: 'black'}} contentContainerStyle={styles.page}>
                    <Speaker speaker={speakerData} />
                </ScrollView>
            </View>
    }
}

const mapStateToProps = state => (
    {
        isLoading: state.speaker.isLoading
    }
)

export default connect(mapStateToProps)(SpeakerContainer);