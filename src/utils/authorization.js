import React from 'react';
import {withRouter} from 'react-router-dom'

export const checkAuthenticated = (Component) => {
    return (withRouter(class AuthWrapped extends React.Component {
        constructor(props) {
            super(props);
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.error) {
                // console.log(nextProps.error)
                const {status} = nextProps.error
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
                this.props.error ?
                    this.props.error.status === 401 ? null :
                        <Component
                            {...this.props}
                        />
                : this.props.history.replace({
                    pathname: '/login',
                    state: {
                        from: this.props.location
                    }
                })
            )
        }
    }));
}