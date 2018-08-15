import React, { Component } from 'react'
import MainRoutes from '@/routes'
import {Provider} from 'react-redux'
import {store} from './store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <MainRoutes/>
        </div>
      </Provider>
    )
  }
}
