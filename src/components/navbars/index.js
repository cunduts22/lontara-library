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

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
                    <NavLink to="/" className="navbar-brand">Home</NavLink>
                <div className="navbar-nav">
                    <button className="nav-item btn btn-danger" onClick={this.onLogout.bind(this)}>Logout</button>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbars)