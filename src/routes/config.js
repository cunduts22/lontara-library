import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import {checkAuthenticated} from '../utils/authorization'
import { MyCard,Profile, Skill } from '../components/dashboard';
import Setting from '../pages/setting';
import Books from '../pages/books';
import {BookCard} from '../components/books'

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
        path: '/edit-profile',
        component: checkAuthenticated(Setting),
        exact: true
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
            }
        ]
    },
    {
        path: '/book',
        component: checkAuthenticated(Books),
        exact: true,
    },
    {
        path: '/book/:_id',
        component: checkAuthenticated(BookCard),
        exact: true
    }
]

export const RoutesComponent = (route) => {
    return (
        <Route
        exact={route.exact ? route.exact : false}
        path={route.path} 
        render={props => {
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