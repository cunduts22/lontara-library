import React from 'react'
import { withRouter } from 'react-router-dom'
import {RoutesComponent} from '../../routes/config'

export const Skill = props => {
    return (
        
        <div className="card">
            <div className="card-body">
                <div className="card-header" style={{ padding: '0', backgroundColor: '#fff', borderBottom: 'none' }}>
                    <ul className="nav nav-tabs justify-content-center" style={{ justifyContent: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
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
