import React from 'react'

export const MyCard = (props) => {
    return (
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
                <h3 className="card-title">{props.name ? props.name : 'Mary Doe'}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <p className="text-black-50">Email</p>
                            </div>
                            <div className="col-md-8">
                                <p className="text-muted">: {props.email ? props.email : 'mary_doe@gmail.com'}</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <p className="text-black-50">Gender</p>
                            </div>
                            <div className="col-md-8">
                                <p className="text-muted">: {props.gender ? props.gender : 'Female'}</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <p className="text-black-50">Skill</p>
                            </div>
                            <div className="col-md-8">
                                <p className="text-muted">: {props.skill ? props.skill : 'Web Designer, Graphic Designer'}</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <p className="text-black-50">Origin</p>
                            </div>
                            <div className="col-md-8">
                                <p className="text-muted">: {props.origin ? props.origin : 'Indonesia'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={props.imageUrl} alt="" className="img-fluid" style={{width: '200px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}