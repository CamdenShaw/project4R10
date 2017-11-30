import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import Sessions from './Sessions'

import NavGradient from '../../components/Gradient'
import { getSpeaker } from '../../redux/modules/speaker'
import { createFav, deleteFav } from '../../config/module'
import { queryFavs, realm } from '../../config/module'

class SessionsContainer extends Component {
    static route = {
        navigationBar: {
            title(params) {return "Session"},
            tintColor: 'white',
            visible: false,
            renderBackground: () => <NavGradient />
        }
    }

    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.faved = []
        this.id = null
    }

    componentWillMount() {
        this.id = this.props.sessionData.session_id
        this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
        this.faved = queryFavs(this.id)
        realm.addListener('change', this.updateRealm)
        this.faved[0] ? this.setState({
            text: "remove from faves"
        }) : this.setState({
            text: "add to faves"
        })
    }

    updateRealm = () => this.forceUpdate()

    componentWillUnmount() {
        realm.removeListener('change', this.updateRealm)
    }

    dealWithFav = () => {
        let id = this.props.sessionData.session_id
        if(this.faved[0]) {
            deleteFav(id)
            this.setState({
                text: "Add to Faves"
            })
        } else {
            createFav(id)
            this.setState({
                text: "Remove from Faves"
            })
        }
    }

    render() {
        const { sessionData, navigation, isLoading, speaker } = this.props
        return isLoading ? 
            <ActivityIndicator /> 
             :  <Sessions 
                    item={sessionData} 
                    navigatorUID={navigation} 
                    speaker={speaker} 
                    faved={this.faved} 
                    dealWithFav={this.dealWithFav}
                    buttonText={this.state.text}
                 />
    }
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation.currentNavigatorUID,
        isLoading: state.speaker.isLoading,
        speaker: state.speaker.speaker
    }
}

export default connect(mapStateToProps)(SessionsContainer)