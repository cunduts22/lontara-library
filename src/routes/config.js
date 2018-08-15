import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import {checkAuthenticated} from '../utils/authorization'
import { MCard,MSkill } from '../components/dashboard';

const PageNotFound = (props) => {

    return (
        <div>
            404 page not found
        </div>
    )
}

export const routes = [
    {
        path: '/',
        component: checkAuthenticated(Dashboard),
        exact: true
    },
    {
        path: '/dashboard',
        component: checkAuthenticated(Dashboard),
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/about',
        component: checkAuthenticated(MSkill),
        routes: [
            {
                path: '/about/skill',
                component: checkAuthenticated(MCard)
            }
        ]
    },
    {
        component: PageNotFound
    }
]

export const RoutesComponent = route => {
    return (
        <Route 
            exact={route.exact ? route.exact : false}
            path={route.path} 
            render={props => (
                <route.component 
                    {...props}
                    routes={route.routes}
                />
            )}
        />
    )
}