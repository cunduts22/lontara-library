import React, { Component } from 'react'
import {EditProfile} from '../components/setting'
export default class Setting extends Component {
    render() {
        return (
            <EditProfile {...this.props}/>
        )
    }
}
