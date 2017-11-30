import React from "react"
import { View, Image, ScrollView } from "react-native"
import propTypes from "prop-types"

import MyAppText from "../../components/MyAppText"
import MyHeaderText from "../../components/MyHeaderText"
import CodeItem from "../../components/CodeItem"
import styles from "./styles"

const About = ({ data }) => {
    return (
        <ScrollView style={styles.container}>
            <Image
                source={require("../../assets/images/r10_logo.png")}
                style={styles.image}
            />
            <View style={styles.separator} />
            <MyAppText>
                R10 is a conference that focuses on just about any topic related to dev.
            </MyAppText>
            <MyHeaderText>Date & Venue</MyHeaderText>
            <MyAppText>
                The R10 conference will take place on Tuesday, June27, 2017 in Vancouver,
                BC.
            </MyAppText>
            <MyHeaderText>Code of Conduct</MyHeaderText>
            {data.map(item => {
                return <CodeItem key={item.title} thisKey={item.title} item={item} />
            })}
            <View style={styles.separator} />
            <MyAppText>© RED Academy 2017</MyAppText>
        </ScrollView>
    )
}

About.propTypes = {}

export default About
