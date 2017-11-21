import React from 'react'
import { Text, View, Image} from 'react-native'
import propTypes from 'prop-types'
import MyAppText from '../../components/text/MyAppText'
import MyHeaderText from '../../components/text/MyHeaderText'
import { styles } from './styles'

const About = ({data}) => {
    let key = 0
    return <View>
        <Image source={{uri: "/Users/camdenshaw/Documents/RED-academy/app_dev/projects/project4R10/js/assets/images/r10_logo.png"}} style={styles.image} />
        <MyAppText>R10 is a conference that focuses on just about any topic related to dev.</MyAppText>
        <MyHeaderText>Date & Venue</MyHeaderText>
        <MyAppText>The R10 conference will take place on Tuesday, June27, 2017 in Vancouver, BC.</MyAppText>
        {
            data.map(item => {
                return (
                    <View key={key++}>
                        <MyHeaderText>{item.title}</MyHeaderText>
                        <MyAppText>{item.description}</MyAppText>
                    </View>
                )
            })
        }
    </View>
}

About.propTypes = {}

export default About