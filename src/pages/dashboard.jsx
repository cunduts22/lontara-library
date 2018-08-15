import React, { Component } from 'react'
import {MCard} from '@/components/dashboard'
export default class Dashboard extends Component {
    render() {
        return <div className="card" style={{borderTop: 'none'}}>
            <div className="card-body">
              <h1 className="card-header">Web Designer</h1>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <MCard />
                  <div className="row justify-content-center">
                    <p className="lead text-center" style={{ fontSize: "16px", fontWeight: "lighter" }}>
                      {this.props.user ? this.props.user.history : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + "Asperiores, a? Voluptas asperiores possimus praesentium ea sunt" + "dolorum? Quidem, corrupti molestiae."}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <img src={this.props.user ? this.props.user.image : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?dl&fit=crop&crop=entropy&w=1280&h=1919"} alt="no-images-loading" className="img-fluid" style={{ width: "200px" }} />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row justify-content-center">
                <button className="btn btn-primary" style={{ margin: "10px" }}>
                  Print
                </button>
                <button className="btn btn-success" style={{ margin: "10px" }}>
                  Save
                </button>
              </div>
            </div>
          </div>;
    }
}
