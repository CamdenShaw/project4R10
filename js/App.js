/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigationProvider, StackNavigation, NavigationContext } from '@expo/ex-navigation'
import { Provider } from 'react-redux'

import Store from './redux/store'
import Router from './navigation/routes'

const navigationContext = new NavigationContext({
  router: <Router style={{padding: 10, margin: 10}} />,
  store: Store
})

export default class App extends Component {
  render() {
    return(
      <Provider store={Store}>
        <NavigationProvider style={{display: 'none'}} context={navigationContext}>
          <StackNavigation 
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute('layout')}
          />
        </NavigationProvider>
      </Provider>
    )
  }
}