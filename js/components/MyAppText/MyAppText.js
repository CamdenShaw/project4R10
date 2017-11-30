import React from "react"
import { Text } from "react-native"

import styles from "./styles"

const MyAppText = () => {
    return <Text style={styles.text}>{this.props.children}</Text>
}

export default MyAppText
