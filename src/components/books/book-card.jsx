import React from 'react'
import {Link} from 'react-router-dom'
export const BookCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header bg-success text-white">{props.title ? props.title : 'No Books'}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <BookBody {...props}/>
                        </div>
                        <div className="col-sm-3 justify-content-center">
                            <img src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?dl&fit=crop&crop=entropy&w=640&h=480" alt="No Images" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="text-center text-mute">
                            {props.short_history}
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center bg-success">
                    <Link to={`/book/${props._id}`} className="btn btn-danger col-md-3" style={{margin: 'auto 5px'}}>Detail</Link>
                    <a href="javascript:void(0)" className="btn btn-warning col-md-3" style={{margin: 'auto 5px'}}>Order</a>
                </div>
            </div>
        </div>
    )
}

const BookBody = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-4">
                    <div className="text-black-50">Genre</div>
                </div>
                <div className="col-sm-8">
                    <div className="text-mute">{props.genre ? props.genre : 'No Genre'}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="text-black-50">Author</div>
                </div>
                <div className="col-sm-8">
                    <div className="text-mute">{props.author ? props.author : 'No Author'}</div>
                </div>
            </div>
        </React.Fragment>
    )
}