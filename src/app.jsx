import React, { Component } from 'react'
import MainRoutes from '@/routes'
import {connect} from 'react-redux'
import { checkAuth, userLogin } from './actions';

class App extends Component {

  componentWillMount() {
    this.props.isAuth()
  }

  render() {
    return (
        <div className="container">
          <MainRoutes {...this.props}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {
      ...state.userReducers
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuth: () => {
      return dispatch(checkAuth())
    },
    onLogin: (payload) => {
      return dispatch(userLogin(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)