import React, { Component } from 'react';
import { 
    View,
    Image, 
    Platform, 
    TouchableOpacity,
    LayoutAnimation, 
    UIManager,
    Animated,
    Easing } from 'react-native'
import MyHeaderText from '../../components/text/MyHeaderText'
import MyAppText from '../../components/text/MyAppText'

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
        ]).start(() => this.middle(x))
    }

    animateIconEnd(x) {
        let y = this.icon === '-' ? x+0.75 : x+1.25
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

    middle(x) {
        this.dashTransform = this.icon === '-' ? -2 : 0
        this.setState({
            icon: new Animated.Value(this.icon)
        })
        this.animateIconEnd(x)
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
                    <View 
                        style={{
                        flex:1, 
                        flexDirection: 'row',
                        }}
                     >
                        <Animated.View 
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                transform: [{rotate: spin},{translateY: this.dashTransform}],
                                height: 27,
                                maxWidth: 27,
                                opacity: this.state.opacity
                            }}
                         >
                            <MyHeaderText 
                                style={{
                                    textAlign: 'center', 
                                    height:28, 
                                    width: 28
                                    }}
                                 >
                                    {this.state.icon._value}</MyHeaderText>
                        </Animated.View>
                        <MyHeaderText>{this.props.item.title}</MyHeaderText>
                    </View>
                </TouchableOpacity>
                { this.state.showText && <MyAppText>{this.props.item.description}</MyAppText>}
            </View>
        );
    }
}

export default CodeItem;