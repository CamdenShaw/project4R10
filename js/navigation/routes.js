import React from 'react';
import { createRouter } from '@expo/ex-navigation'
import About from '../scenes/About'
import Schedule from '../scenes/Schedule'
import Layout from '../navigation/NavigationLayout'

const Router = createRouter(() => ({
    layout: () => Layout,
    schedule: () => Schedule,
    about: () => About
}))

export default Router