import React from 'react'

export const Navbars = props => {
    const onLogout = () => {
        localStorage.clear()
        location.reload()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="javascript:void(0)">Navbar</a>
            <div className="navbar-nav">
                <button className="nav-item btn btn-danger" onClick={onLogout()}>Logout</button>
            </div>
        </nav>
    )
}