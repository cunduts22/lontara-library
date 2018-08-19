import React, { Component } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {routes, RoutesComponent} from './config'
import Navbars from '../components/navbars'
class MainRoutes extends Component {

     constructor(props) {
        super(props)
        this.state = {
            error: true
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.user.error ? this.setState({error: true}) : this.setState({error: false})
        // console.log(nextProps.user.error.response.status)
    }

    render() {
        return (
            <Router>
                <div>
                    {
                        this.state.error ?  null
                                            :
                                            <Navbars {...this.props}/>
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
                </div>
            </Router>
        )
    }
}


export default MainRoutes