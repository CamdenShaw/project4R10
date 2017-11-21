import React, { Component } from 'react';
import { Text } from 'react-native'

import styles from './styles'

class MyAppText extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.children}</Text>
        );
    }
}

export default MyAppText;