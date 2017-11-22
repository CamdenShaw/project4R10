import { combineReducers } from 'redux'
import { NavigationReducer } from '@expo/ex-navigation'
import conduct from "./modules/conduct"

const rootReducers =
    combineReducers({
        navigation: NavigationReducer,
        conduct: conduct
    })

export default rootReducers