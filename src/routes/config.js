import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import {checkAuthenticated} from '../utils/authorization'
import { MCard,MProfile, MSkill } from '../components/dashboard';

export const routes = [
    {
        path: '/',
        component: checkAuthenticated(Dashboard),
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: checkAuthenticated(MProfile),
        routes: [
            {
                path: '/dashboard',
                component: checkAuthenticated(MCard),
                exact: true
            },
            {
                path: '/dashboard/about-me',
                component: checkAuthenticated(MCard),
                exact: true
            },
            {
                path: '/dashboard/skill',
                component: checkAuthenticated(MSkill),
                exact: true
            }
        ]
    }    
]

export const RoutesComponent = (route) => {
    // console.log(route.props)
    return (
        <Route 
            exact={route.exact ? route.exact : false}
            path={route.path} 
            render={props => { 
                const myprops = Object.assign(props, route.props)
                return (
                    <route.component 
                        {...myprops}
                        routes={route.routes}
                    /> 
                )
            }}
        />
    )
}