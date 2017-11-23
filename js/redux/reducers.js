import { combineReducers } from 'redux'
import { NavigationReducer } from '@expo/ex-navigation'
import conduct from './modules/conduct'
import sessions from './modules/sessions'
import schedule from './modules/schedule'
import speaker from './modules/speaker'
import favs from './modules/speaker'

const rootReducers =
    combineReducers({
        navigation: NavigationReducer,
        conduct: conduct,
        sessions: sessions,
        schedule: schedule,
        speaker: speaker,
        favs: favs
    })

export default rootReducers