import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class User extends Component {

    render() {
        const { login, avatar_url, html_url } = this.props.user; //destcrigting this.state yazmak yerine jsx yazarken sadece parametreyi gireriz
        return (
      
                <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="card mt-2 ">
                        <img src={avatar_url} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/user/${login}`} className="btn btn-primary btn-sm" target = "_blank">Go To Profile</Link>
                    </div>
                </div>
      
        )
    }
}

export default User
