import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
class Navbars extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isHome: true,
            pathname: '/'
        }
    }

    onLogout = () => {
        localStorage.clear()
        location.reload()
    }

    componentDidMount = () => {        
        this.props.history.listen((location, action) => {
            if (location.pathname.split('/').length < 3) {
                this.setState({
                    isHome: true,
                })
            } else {
                console.log(action, location.pathname)
                this.setState({
                    isHome: false,
                    pathname: location.pathname
                })
            }
        })
    }

    

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <NavLink to="/" className="navbar-brand">Home</NavLink>

                {/* {
                    this.state.isHome ? 
                    <NavLink to="/" className="navbar-brand">Home</NavLink>
                        :
                        <NavLink to={{
                            pathname: this.state.pathname,
                            state: {from: this.props.location.pathname}
                        }} className="navbar-brand"> Go Back </NavLink>
                } */}
                
                <div className="navbar-nav">
                    <button className="nav-item btn btn-danger" onClick={this.onLogout.bind(this)}>Logout</button>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbars)