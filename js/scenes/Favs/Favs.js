import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, ScrollView } from 'react-native'
import propTypes from 'prop-types'

import EventsList from '../../components/EventsList'

const Favs = ({ favs, isLoading, navigation }) => {
        return isLoading ?
            <ActivityIndicator /> :
            <ScrollView>
                <EventsList data={favs} favs={favs.id} navigatorUID={navigation} />
            </ScrollView>
}

export default Favs