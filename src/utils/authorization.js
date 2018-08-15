import React from 'react';
import {withRouter} from 'react-router-dom'

export const checkAuthenticated = (Component) => {
    return (withRouter(class AuthWrapped extends React.Component {
        constructor(props) {
            super(props);
        }
        
        componentDidMount = () => {
            this.checkAutorization()
        }

        checkAutorization() {
            new Promise((resolve, reject) => {
                    resolve(this.props.user)
                    reject(this.props.user.error)
                })
                .then(res => !!res.auth ? null :
                    this.props.history.replace({
                        pathname: '/login',
                        state: {
                            from: this.props.location
                        }
                    })
                )
                .catch(err => console.log(err))

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