import React from 'react'
import { Text, View, Image} from 'react-native'
import propTypes from 'prop-types'
import { styles } from './styles'

const About = ({data}) => {
    let key = 0
    return <View>
        <Image source={{uri: "/Users/camdenshaw/Documents/RED-academy/app_dev/projects/project4R10/js/assets/images/r10_logo.png"}} style={styles.image} />
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text>Date & Venue</Text>
        <Text>The R10 conference will take place on Tuesday, June27, 2017 in Vancouver, BC.</Text>
        {
            data.map(item => {
                return (
                    <View key={key++}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )
            })
        }
    </View>
}

About.propTypes = {}

export default About