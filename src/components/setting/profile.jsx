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
            this.props.onUploadImages({images: this.state.images})
            this.props.onEditUser(this.state.data)
        } else if (this.state.data === undefined && this.state.images !== undefined) {
            this.props.onUploadImages({images: this.state.images})
        } else if (this.state.data && this.state.images === undefined) {
                this.props.onEditUser(this.state.data)
        } else {
            console.log(this.state)
        }
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            imagesUrl: nextProps.user.imageUrl,
            users: nextProps.user
        })
    }

    render() {
        const {users} = this.state
        const {user} = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Edit Profile</div>
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData.bind(this)}>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" defaultValue={users ? users.name : user.name} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" className="form-control" defaultValue={users ? users.email : user.email} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Origin</label>
                                    <input name="origin" type="text" className="form-control" defaultValue={users ? users.origin : user.origin} onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group d-flex justify-content-center">
                                    <div className="images-src text-center col-md-6">
                                        <img src={this.state.imagesUrl ? this.state.imagesUrl : this.props.user.imageUrl} alt="no images" className="img-fluid" style={{ width: "200px" }} />
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