import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import {checkAuthenticated} from '../utils/authorization'
import { MyCard,Profile, Skill } from '../components/dashboard';
import { EditProfile } from '../components/setting';

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
        component: checkAuthenticated(Profile),
        routes: [
            {
                path: '/dashboard',
                component: MyCard,
                exact: true
            },
            {
                path: '/dashboard/about-me',
                component: MyCard,
                exact: true,
            },
            {
                path: '/dashboard/skill',
                component: Skill,
                exact: true,
            },
            {
                path: '/dashboard/edit-profile',
                component: EditProfile,
                exact: true
            }
        ]
    }
]

export const RoutesComponent = (route) => {
    // console.log(route)
    return (
        <Route
        exact={route.exact ? route.exact : false}
        path={route.path} 
        render={props => {
                // const state = {}
                // Object.assign(state,{...route},{...route.props}, {...props})
                return (
                    <route.component
                        {...props}
                        {...route}
                        {...route.props}
                        routes={route.routes}
                    />
                )
            }}
        />
    )
}