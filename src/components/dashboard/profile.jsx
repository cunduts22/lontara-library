import React from 'react'
import {RoutesComponent} from '../../routes/config'
import {NavLink} from 'react-router-dom'

export const Profile = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header" style={{ padding: '0', backgroundColor: '#fff', borderBottom: 'none' }}>
                    <ul className="nav nav-tabs justify-content-center" style={{ justifyContent: 'none' }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/about-me">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/skill">Skill</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                {props.routes.map((route,i) => {
                    return <RoutesComponent key={i} {...route}/>
                })}
            </div>
        </div>
    )
}
// export default withRouter(Skill)
