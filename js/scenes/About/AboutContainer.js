import React, { Component } from 'react'
import { ActivityIndicator, FlatList, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getCodeItems } from '../../redux/modules/conduct'
import { styles } from './styles'

import About from './About'

class AboutContainer extends Component {
    static route = {navigationBar: {title: 'About'}}

    // static propTypes = {}

    componentDidMount() {
        this.props.dispatch(getCodeItems())
    }

    render() {
        const { codeOfConduct, isLoading } = this.props
        return isLoading ? 
                <ActivityIndicator /> :
                <ScrollView><About data={codeOfConduct} /></ScrollView>
    }
}

const mapStateToProps = state => {
    return {
        codeOfConduct: state.conduct.codeOfConduct,
        isLoading: state.conduct.isLoading
    }
}

export default connect(mapStateToProps)(AboutContainer)
