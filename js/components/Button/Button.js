import React from "react"
import { TouchableHighlight, Text } from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"
import LinearGradient from "react-native-linear-gradient"
import { colours } from "../../config/styles"

const Button = ({ text, handlePress }) => {
    return (
        <TouchableHighlight
            underlayColor={colours.lightGrey}
            onPress={handlePress}
            style={styles.button}
        >
            <LinearGradient
                colors={[colours.purple, colours.blue]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.buttonGradient}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableHighlight>
    )
}

Button.defaultProps = {
    text: null,
    handlePress: () => 1 - 1
}

Button.propTypes = {
    text: PropTypes.string,
    handlePress: PropTypes.func
}

export default Button
