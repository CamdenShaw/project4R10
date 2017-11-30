import React from "react"
import { Text, View, SectionList, TouchableHighlight } from "react-native"
import PropTypes from "prop-types"

import Heart from "../HeartIcon"
import { goToSession, timeConvert } from "../../lib/helpers"
import { queryFavs } from "../../config/module"
import styles from "./styles"
import { colours } from "../../config/styles"

const EventsList = ({ data, navigatorUID }) => {
    return (
        <SectionList
            renderItem={({ item }) => (
                <TouchableHighlight
                    underlayColor={colours.lightGrey}
                    onPress={() => goToSession(navigatorUID, item)}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Heart
                            faved={queryFavs(item.session_id)}
                            location={item.location}
                        />
                        <View style={styles.separator} />
                    </View>
                </TouchableHighlight>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={styles.time}>{timeConvert(section.title)}</Text>
            )}
            sections={data}
            keyExtractor={item => item.session_id}
        />
    )
}

EventsList.defaultProps = {
    data: [],
    navigatorUID: ""
}

EventsList.propTypes = {
    data: PropTypes.array,
    navigatorUID: PropTypes.string
}

export default EventsList
