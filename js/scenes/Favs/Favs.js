import React from "react"
import { ScrollView } from "react-native"
import PropTypes from "prop-types"

import EventsList from "../../components/EventsList"
import Loader from "../../components/Loader"

const Favs = ({ favs, isLoading, navigation }) => {
    return isLoading ? (
        <Loader />
    ) : (
        <ScrollView>
            <EventsList data={favs} favs={favs.id} navigatorUID={navigation} />
        </ScrollView>
    )
}

Favs.defaultProps = {
    favs: [],
    isLoading: Boolean,
    navigation: ""
}

Favs.propTypes = {
    favs: PropTypes.array,
    isLoading: PropTypes.bool,
    navigation: PropTypes.string
}

export default Favs
