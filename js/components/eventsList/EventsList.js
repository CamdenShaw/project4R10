import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'

import MyAppText from '../../components/MyAppText'
import MyHeaderText from '../../components/MyHeaderText'
import Heart from '../HeartIcon'
import { formatSession, goToSession, timeConvert } from '../../lib/helpers'
import { queryFavs } from '../../config/module'
import styles from './styles'
import { colours } from '../../config/styles'

const EventsList = ({data, navigatorUID, favs = null}) => {
    return (
        <SectionList
            renderItem={({item}) => 
                <TouchableHighlight underlayColor={colours.lightGrey} onPress={() => goToSession(navigatorUID, item)}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Heart faved={queryFavs(item.session_id)} location={item.location} />
                        <View style={styles.separator} />
                    </View>
                </TouchableHighlight> 
            }
            renderSectionHeader={({section}) => <Text style={styles.time}>
                    {timeConvert(section.title)}
                </Text> 
            }
            sections={data}
            keyExtractor={item => item.session_id}
         />
    )
}

export default EventsList