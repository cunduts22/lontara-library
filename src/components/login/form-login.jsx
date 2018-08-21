import React from 'react'

export default class FormLogin extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            error:{}
        }
    }

    onChangeForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    sendForm = (e) => {
        e.preventDefault()
        if (!this.state.email && !this.state.password)
            this.setState({error: {email: true,password: true}})
        else if(!this.state.email)
            this.setState({error:{email: true}})
        else if (!this.state.password)
            this.setState({error:{password: true}})
        else this.props.payload({
                    payload: {
                        email: this.state.email, 
                        password: this.state.password
                    }
                }
            )
    }

    componentDidUpdate() {
            if (this.state.error.email)
                setTimeout(() => {this.setState({error: {email: false}})},3000)
            else if (this.state.error.password)
                setTimeout(() => {this.setState({error: {password: false}})},3000)
            else if(this.state.error.email && this.state.error.password) 
                setTimeout(() => {this.setState({error: {password: false,email: false}})},3000)
    }
    
    
    render() {
        const {email,password} = this.state.error
        return (
            <div className="card">
                <div className="card-body">
                    <div className="text-danger text-center">
                        {
                            this.state.error ? 
                                this.props.error.message !== 'failed authenticated' ? 
                                    this.props.error.message : null
                                : null 
                        }
                    </div>
                    <form className="form" onSubmit={this.sendForm.bind(this)}>
                        <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email" 
                                    className="form-control" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
                                    name="email"
                                    style={{borderColor: email ? 'red' : null}}
                                    onChange={this.onChangeForm.bind(this)}
                                />
                                {
                                    email ? 
                                    <small className="form-text text-danger">Email is Required</small>                                    
                                    :
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small> 
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    style={{borderColor: password ? 'red' : null}}
                                    onChange={this.onChangeForm.bind(this)}
                                />
                                {
                                    password ? 
                                    <small className="form-text text-danger">Password is Required</small>                                    
                                    :
                                    null
                                } 
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}