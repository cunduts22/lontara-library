import React, { Component } from 'react'
import MainRoutes from '@/routes'
import {connect} from 'react-redux'
import {
  userLogin,
  fetchUser,
  fetchImages,
  editUserProfile,
  clearProgress,
  fetchBook
} from './actions';

import { Modal } from './components/modal';
import { formData } from './utils/helper'
class App extends Component {
  state = {
    intervalTime: 0,
    show: false
  }
  componentDidMount() {
    this.props.onFetchUser()
    this.setState({
      show: true
    })
    setTimeout(() => {
      this.props.onClearProgress(0,false)
      this.setState({
        show: false
      })
    },2000)
  }

  componentWillReceiveProps(props) {
    this.setState({
      show: true
    })
    props.loading ?
    setTimeout(() => {
      this.props.onClearProgress(0, false)
      this.setState({
        show: false
      })
    }, 2000) : null
  }

  render() {
    const {progress} = this.props
    return (
        <React.Fragment>
            <div className="progress" style={{height: "5px"}}>
              <div className="progress-bar bg-success" role="progressbar" style={{width: progress+'%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <Modal show={this.state.show}/> 
          <div className="container">
            <MainRoutes {...this.props}/>
          </div>
        </React.Fragment>
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
    },
    progress: state.userReducers.progress,
    loading: state.userReducers.loading,
    books: state.bookReducers.data
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
      return dispatch(editUserProfile(payload))
    },
    onClearProgress: (progress, loading) => {
      return dispatch(clearProgress(progress,loading))
    },
    onFetchBooks: (pages) => {
      return dispatch(fetchBook(pages))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)