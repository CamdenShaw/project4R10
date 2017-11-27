import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView, View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Speaker from './Speaker'
import styles from './styles'

class SpeakerContainer extends Component {

    static route = {
        navigationBar:{
            title(params){return},
            visible: false
        }
    }

    goBack = () => {
        this.props.navigator.pop()
    }

    render() {
        let { isLoading, speakerData } = this.props
        return isLoading ? <ActivityIndicator /> :
            <View>
                <View style={styles.header}>
                    <TouchableHighlight onPress={this.goBack} >
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