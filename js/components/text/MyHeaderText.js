import React, { Component } from 'react';
import { Text } from 'react-native'

import styles from './styles'

class MyHeaderText extends Component {
    state = {  }
    render() {
        return (
            <Text style={styles.header}>{this.props.children}</Text>
        );
    }
}

export default MyHeaderText;