import { combineReducers } from 'redux'
import { NavigationReducer } from '@expo/ex-navigation'
import conduct from './modules/conduct'
import sessions from './modules/sessions'
import schedule from './modules/schedule'

const rootReducers =
    combineReducers({
        navigation: NavigationReducer,
        conduct: conduct,
        sessions: sessions,
        schedule: schedule
    })

export default rootReducers