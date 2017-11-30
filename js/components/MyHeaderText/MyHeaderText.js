import React from "react"
import { Text } from "react-native"

import styles from "./styles"

const MyHeaderText = props => {
    console.log(props)
    return <Text style={styles.header}>{props.children}</Text>
}

export default MyHeaderText
