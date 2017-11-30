import React from "react"
import { Text } from "react-native"

import styles from "./styles"

const MyAppText = props => {
    return <Text style={styles.text}>{props.children}</Text>
}

export default MyAppText
