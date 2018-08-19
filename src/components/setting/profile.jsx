import React from 'react'

export default class EditProfile extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    onChange(e) {
        this.setState({
            data: {
                [e.target.name]: e.target.value
            }
        })
    }

    onChangeImages(e) {
        this.setState({
            imagesUrl: URL.createObjectURL(e.target.files[0]),
            images: e.target.files[0]
        })

    }

    sendData(e) {
        e.preventDefault()
        // console.log(this.state.data !== undefined)
        
        if(this.state.images !== undefined && this.state.data !== undefined) {
            this.props.onUploadImages(this.state.images)
            this.props.onEditUser(this.state.data)
        } else if (this.state.data === undefined && this.state.images !== undefined) {
            this.props.onUploadImages(this.state.images)
        } else if (this.state.data && this.state.images === undefined) {
                this.props.onEditUser(this.state.data)
        } else {
            console.log(this.state)
        }
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            imagesUrl: nextProps.imageUrl,
            user: nextProps
        })
    }

    render() {
        const {user} = this.state
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Edit Profile</div>
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData.bind(this)}>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="col-md-6">Name</div>
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" defaultValue={user ? user.name : this.props.name} onChange={this.onChange.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6">Email</div>
                                    <div className="col-md-6">
                                        <input type="text" name="email" className="form-control" defaultValue={user ? user.email : this.props.email} onChange={this.onChange.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6">Origin</div>
                                    <div className="col-md-6">
                                        <input name="origin" type="text" className="form-control" defaultValue={user ? user.origin : this.props.origin} onChange={this.onChange.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="images-src text-center col-md-6">
                                        <img src={this.state.imagesUrl ? this.state.imagesUrl : this.props.imageUrl} alt="no images" className="img-fluid" style={{ width: "200px" }} />
                                        <input type="file" name="images" ref="images" className="text-center images-files" onChange={this.onChangeImages.bind(this)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="save" className="btn btn-info"/>
                    </form>
                </div>
            </div>
        )
    }
}