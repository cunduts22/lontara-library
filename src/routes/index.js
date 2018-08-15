import React, { Component } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import {routes, RoutesComponent} from './config'
import {Navbars} from '../components/navbars'
import { checkAuth } from '../actions';
class MainRoutes extends Component {

     constructor(props) {
        super(props)
        this.state = {
            error: true
        }
    }

    componentWillMount = () => {
      this.props.isAuth()
    };
    
     componentDidMount = () => {
         new Promise((resolve, reject) => {
                 resolve(this.props.auth !== undefined)
                 reject(this.props.error)
             })
             // .then(res => console.log(res))
             .then(res => res ? 
                            this.setState({error: false},() => console.log(this.state.error))
                            :
                            this.setState({error: true})
                 
             )
             .catch(err => console.log(err))
     }

    render() {
        return (
            <Router>
                <div>
                    {
                        this.state.error ?  null
                                            :
                                            <Navbars/>
                    }
                    <Switch>
                        {
                            routes.map((route, i) => (
                                <RoutesComponent
                                    key={i}
                                    {...route}
                                />
                            ))
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.userReducers.auth,
        user: state.userReducers.user,
        error: state.userReducers.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuth: () => {
            return dispatch(checkAuth())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoutes)