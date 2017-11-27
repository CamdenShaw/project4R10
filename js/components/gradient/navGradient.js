import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colours } from '../../config/styles'

class NavGradient extends Component {
    
    render() {
        return (
            <LinearGradient 
                colors={[colours.red, colours.purple]} 
                start={{x: 0.1, y: 0.9}}
                end={{x: 0.9, y: 0.1}}
                style={{width: '100%', height: '100%'}}>
            </LinearGradient>
        );
    }
}

export default NavGradient;