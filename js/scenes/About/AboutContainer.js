import React, { Component } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import propTypes from 'prop-types'
import { styles } from './styles'

import About from './About'

class AboutContainer extends Component {
    state = {
        isLoading: true
    }

    // static propTypes = {}

    componentDidMount() {
        fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
            .then(response => response.json())
            .then(data => {
                this.setState({data, isLoading:false})
            })
            .catch(error => console.log('Error fetching json...', error))
    }

    render() {
        const { data, isLoading } = this.state
       return isLoading ? 
                <ActivityIndicator /> :
                <About data={data} />
    }
}

export default AboutContainer;