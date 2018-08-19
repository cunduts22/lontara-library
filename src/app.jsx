import React, { Component } from 'react'
import MainRoutes from '@/routes'
import {connect} from 'react-redux'
import { userLogin, fetchUser, fetchImages, editUserProfile } from './actions';
class App extends Component {

  componentDidMount() {
    this.props.onFetchUser()
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
      ...state.userReducers.data
    },
    error: {
      ...state.userReducers.error
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (payload) => {
      return dispatch(userLogin(payload))
    },
    onFetchUser: () => {
      return dispatch(fetchUser())
    },
    onUploadImages: (payload) => {
      return dispatch(fetchImages(payload))
    },
    onEditUser: (payload) => {
      // console.log(payload)
      return dispatch(editUserProfile(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)