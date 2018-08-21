import React, { Component } from 'react'
import {Form} from '../components/login'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: {},
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.user.name) {
            const { from } = this.props.location.state || { from: { pathname: "/" } }
            this.props.history.replace(from.pathname)
        } else if(nextProps.error.data) {
            const {data} = nextProps.error
            Object.assign(this.state.error, data)
        }
    }
    
    getForm({payload}) {
        this.props.onLogin(payload)
    }

    render() {
        return (
            <div className="card" style={{margin: '8% 0'}}>
                <div className="card-body">
                    <h2 className="card-title text-center">
                        Login
                    </h2>
                </div>
                <div className="card-body">
                    <Form 
                        payload={this.getForm.bind(this)}
                        error={this.state.error}
                    />
                </div>
            </div>
        )
    }
}

export default Login