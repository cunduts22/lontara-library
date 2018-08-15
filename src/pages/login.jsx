import React, { Component } from 'react'
import {Form} from '@/components/login'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: {},
            loading: true
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const { from } = this.props.location.state || { from: { pathname: "/" }}
        !!nextProps.user.error ? this.setState({
            error: {
                message: nextProps.user.error.message ? nextProps.user.error.message : nextProps.user.error.data.message
            },
            loading: false
        }) : this.props.history.replace(from.pathname) //this.setState({auth: nextProps.user.auth})
    }

    getForm({payload}) {
        this.props.onLogin(payload)
    }

    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             loading: false
    //         })
    //     },100)
    // };
    

    render() {
        if(this.state.loading) {
            return <div className="display-4 text-center">Loading ....</div>
        }
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

export default Login