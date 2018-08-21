import React from 'react'

class Modal extends React.Component {
    render() {
        return ( 
            <div 
                className={`card text-white bg-success ${this.props.show ? 'card-in' : 'card-out'}`}
                style={{
                    position: 'fixed',
                    bottom: '15px',
                    right: '15px',
                    overflow: 'hidden'
                }}
            >
                <div className="card-body text-center">
                    Fetch Success
                </div>
            </div>
        )
    }
}
export {
    Modal
}