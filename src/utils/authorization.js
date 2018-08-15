import React from 'react';
import {withRouter, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import {checkAuth} from '../actions'


export const checkAuthenticated = (Component) => {
    return (connect(mapStateProps, mapDispatchToProps)(withRouter(class AuthWrapped extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            this.props.isAuth()
        }         
        
        onLogout() {
            localStorage.clear()
            location.reload()
        }

        componentDidMount = () => {
          new Promise((resolve, reject) => {
            resolve(this.props.auth !== undefined)
            reject(this.props.error)
          })
            // .then(res => console.log(res))
            .then(res => res ?  null 
                                : 
                                this.props.history.replace({
                                    pathname: '/login',
                                    state: { from: this.props.location }
                                })
            )
          .catch(err => console.log(err))
        }
        render() {
            return (
                <Component
                    {...this.props}
                />
            )
        }
    })));
}

const mapStateProps = (state) => {
    return {
        auth: state.userReducers.auth,
        user: state.userReducers.user,
        error: state.userReducers.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        isAuth: () => {
            return dispatch(checkAuth())
        }
    }
}
