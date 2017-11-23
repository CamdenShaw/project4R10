import React from 'react';
import { createRouter } from '@expo/ex-navigation'
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'
import Layout from '../navigation/NavigationLayout'
import Sessions from '../scenes/Sessions'
import Speaker from '../scenes/Speaker'
import Favs from '../scenes/Favs'

const Router = createRouter(() => ({
    layout: () => Layout,
    schedule: () => Schedule,
    about: () => About,
    session: () => Sessions,
    speaker: () => Speaker,
    favs: () => Favs
}))

export default Router