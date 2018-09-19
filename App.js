/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Routes from './Routes'
import reducers from './src/reducers/index'

export default class App extends Component {

  componentWillMount () {
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyB8nTTXNSASgmY9EIh2r96Ks8m978MvdsY',
      authDomain: 'zapzapclone-9b33c.firebaseapp.com',
      databaseURL: 'https://zapzapclone-9b33c.firebaseio.com',
      projectId: 'zapzapclone-9b33c',
      storageBucket: 'zapzapclone-9b33c.appspot.com',
      messagingSenderId: '153670636388'
    }
    firebase.initializeApp(config)

  }

  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    )
  }
}
