import React from 'react';
import {withRouter} from 'react-router-dom'

export const checkAuthenticated = (Component) => {
    return (withRouter(class AuthWrapped extends React.Component {
        constructor(props) {
            super(props);
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.error.response) {
                // console.log(nextProps.error)
                const {status} = nextProps.error.response
                status === 401 ? this.props.history.replace({
                    pathname: '/login',
                    state: {
                        from: this.props.location
                    }
                }) : null
            } else {
                return null
            }
        }

        render() {
            return (
                <Component
                    {...this.props}
                />
            )
        }
    }));
}