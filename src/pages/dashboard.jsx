import React, { Component } from 'react'
import {MyCard} from '@/components/dashboard'
import {Link} from 'react-router-dom'
class Dashboard extends Component {
    
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    render() {
        return <div className="card" style={{borderTop: 'none'}}>
            <div className="card-body">
              <div className="card-header">
                <nav className="nav justify-content-between">
                  <h4>Web Designer</h4>
                  <Link to="/dashboard/about-me" className="btn btn-info">More Info</Link>
                </nav>
              </div>
                <MyCard 
                  {...this.props.user}
                />
                <div className="row justify-content-center">
                  <p className="lead text-center" style={{ fontSize: "16px", fontWeight: "lighter" }}>
                    {"Lorem ipsum dolor sit amet, consectetur adipisicing elit." + "Asperiores, a? Voluptas asperiores possimus praesentium ea sunt" + "dolorum? Quidem, corrupti molestiae."}
                  </p>
                </div>
            </div>
            <div className="card-footer">
              <div className="row justify-content-center">
                <Link to="/dashboard/edit-profile" className="btn btn-info" style={{margin: '10px'}}>
                  Edit
                </Link>
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
export default Dashboard