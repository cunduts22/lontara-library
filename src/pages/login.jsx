import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Form} from '@/components/login'
import {connect} from 'react-redux'
import { checkAuth, userLogin } from '../actions'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: {},
            auth: {}
        }
    }
    
    componentWillMount() {
        this.props.isAuth()
    }
    
    componentWillReceiveProps(nextProps) {
        !!nextProps.error ? this.setState({
            error: {
                message: nextProps.error.message ? nextProps.error.message : nextProps.error.data.message
            }
        }) : this.setState({auth: nextProps.auth})
    }
   componentWillUpdate = (nextProps, nextState) => {
       const { from } = this.props.location.state || {from: {pathname: "/"}}
       console.log(nextState)
       if(nextState.auth !== undefined) {
            this.checkAuthorization(
                this.props.history.replace(from.pathname)
            )
       } else {
           return null
       }
   };

   checkAuthorization(cb) {
        return setTimeout(cb, 100)
   }

    getForm({payload}) {
        this.props.onLogin(payload)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        Login
                    </h2>                    
                </div>
                <div className="card-body">
                    <Form 
                        payload={this.getForm.bind(this)}
                        error={this.state.error.message === 'failed to authenticated' ? this.state.error : null}
                    />
                </div>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        error: state.userReducers.error,
        auth: state.userReducers.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuth: () => {
            return dispatch(checkAuth())
        },
        onLogin: (payload) => {
            dispatch(userLogin(payload))
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Login)