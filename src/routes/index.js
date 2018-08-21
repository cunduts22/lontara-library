import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {routes, RoutesComponent} from './config'
import Navbars from '../components/navbars'
import {Footer} from '../components/footer'
class MainRoutes extends Component {

     constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <React.Fragment>
                    {
                        this.props.error ? 
                            this.props.error.status === 401 ?
                                null : <Navbars {...this.props}/> 
                            :  <Navbars {...this.props}/> 
                    }
                    {
                        this.props.error ?
                            this.props.error.status === 401 ? 
                                null 
                                :
                                <div className="nav-books">
                                    <div className="card">
                                        <Link to="/book" className="btn btn-info">Find Books</Link>
                                    </div>
                                </div>
                            :
                                <div className="nav-books">
                                    <div className="card">
                                        <Link to="/book" className="btn btn-info">Find Books</Link>
                                    </div>
                                </div>
                    }
                    {
                        routes.map((route, i) => (
                            <RoutesComponent
                                key={i}
                                {...route}
                                {...this.props}
                            />
                        ))
                    }
                    {
                        this.props.error ?
                            this.props.error.status === 401 ? 
                                null 
                                :
                                <Footer/>
                            :
                            <Footer/>
                    }
                </React.Fragment>
            </Router>
        )
    }
}


export default MainRoutes