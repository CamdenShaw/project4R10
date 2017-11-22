import React from 'react';
import { createRouter } from '@expo/ex-navigation'
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'
import Layout from '../navigation/NavigationLayout'
import Sessions from '../scenes/Sessions'

const Router = createRouter(() => ({
    layout: () => Layout,
    schedule: () => Schedule,
    about: () => About,
    session: () => Sessions
}))

export default Router