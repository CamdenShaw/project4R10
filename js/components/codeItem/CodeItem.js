import React, { Component } from 'react';
import { 
    View,
    Text,
    Platform, 
    TouchableOpacity,
    LayoutAnimation, 
    UIManager,
    Animated,
    Easing } from 'react-native'
import MyAppText from '../text/MyAppText'
import styles from './styles'

const animationConfig = {
    duration: 400,
    update: {
        type: 'linear',
        springDamping: 0.1,
    },
    delete: {
        type: 'linear',
        property: 'opacity'
    }
}

class CodeItem extends Component {
    constructor() {
        super()
        if(Platform.OS === 'android') {
            !UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
        this.state = { 
            showText: false,
            rotate: new Animated.Value(0),
            icon: new Animated.Value('+'),
            opacity: new Animated.Value(1)
        }
        this.icon = this.state.icon._value
        this.dashTransform = 0
    }

    animateCode = () => LayoutAnimation.configureNext(animationConfig);
    
    animateIconStart() {
        let x = this.icon === '-' ? 0.75 : 1.25
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.opacity,
                    {
                        toValue: 0,
                        duration:400,
                        easing: Easing.poly
                    }
                ),
                Animated.timing(
                    this.state.rotate,
                    {
                        toValue: x,
                        duration: 400,
                        easing: Easing.linear
                    }
                ),
            ]),
        ]).start(() => this.middle())
    }

    animateIconEnd() {
        Animated.parallel([
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 2,
                    duration: 400,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 1,
                    duration: 400,
                    easing: Easing.poly
                }
            )
        ]).start(() => this.reset())
    }

    middle() {
        this.dashTransform = this.icon === '-' ? -1 : 0
        this.setState({
            icon: new Animated.Value(this.icon)
        })
        this.animateIconEnd()
    }

    reset() {
        this.setState({
            rotate: new Animated.Value(0)
        })
    }

    toggleCode = () => {
        this.icon = this.icon === '+' ? '-' : '+'
        this.animateIconStart()
        this.setState({ 
            showText: !this.state.showText,
        })
        this.animateCode()
    }
    
    render() {
        const spin = this.state.rotate.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', '540deg']
        })
        return (
            <View key={this.props.thisKey}>
                <TouchableOpacity onPress={this.toggleCode}>
                    <View style={styles.codeHeader} >
                        <Animated.View 
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                transform: [{rotate: spin},{translateY: this.dashTransform}],
                                maxWidth: 20,
                                opacity: this.state.opacity
                            }}
                         >
                            <Text style={styles.codeIcon}>{this.state.icon._value}</Text>
                        </Animated.View>
                        <Text style={styles.codeHeaderText}>{this.props.item.title}</Text>
                    </View>
                </TouchableOpacity>
                { this.state.showText && <MyAppText>{this.props.item.description}</MyAppText>}
            </View>
        );
    }
}

export default CodeItem;