import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth'
import Logout from '../login/Logout'
import logo from '../../assets/logo.png'


class Profile extends Component {
  state={
    user: {}
  }

  componentDidMount(){
    const service = new AuthService()
    service.getProfile()
      .then(({data: { user }}) => {
        this.setState({user})
      })
      .catch(err => err)
  }

  render() {
    const {user} = this.state
    return (
      <div className="App" style={{backgroundColor: '#03256C', color: 'white', paddingBottom: '30%'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ml-3" href='/'>
            <img src={logo} width="40" height="35" alt="logo"/>
          </a>
          <div className="row ml-auto">
            <Logout {...this.props}/>
            <button className="btn btn-md btn-outline-light mr-sm-2" type="button"><Link id="link" to={`/profile/${user._id}`}>{user.name}</Link></button>
          </div>
        </nav>
          <h1 style={{marginLeft: '20%', marginTop: '2%', color: 'rgb(147, 154, 154)'}}>Wellcome to your profile, {user.name}</h1>  
          <div style={{marginLeft: '10%', color: 'white'}}>
           <div className="card" id="profile__card" style={{width: '40%', marginLeft: '25%', marginTop: '3%'}}>
            <div className="card-body">
              <div className="row">
                <h4 style={{color: 'black'}} className="card-title ml-3">{user.company}</h4>
                <p style={{color: 'black'}} className="mt-2 ml-3">{user.jobTitle}</p>
              </div>
              <h6 className="card-text" style={{color: 'rgb(147, 154, 154)'}}>Email:</h6>
              <p style={{color: 'black'}} className="card-text">{user.email}</p>
              <h6 className="card-text" style={{color: 'rgb(147, 154, 154)'}}>EIN/RFC: </h6>
              <p style={{color: 'black'}} className="card-text">{user.ein}</p>
              <h6 className="card-text" style={{color: 'rgb(147, 154, 154)'}}>Phone:</h6>
              <p style={{color: 'black'}} className="card-text">{user.phone}</p>
              <h6 className="card-text" style={{color: 'rgb(147, 154, 154)'}}>Website: </h6>
              <p style={{color: 'black'}} className="card-text">{user.website}</p>
              <h6 className="card-text" style={{color: 'rgb(147, 154, 154)'}}>Company description: </h6>
              <p style={{color: 'black'}} className="card-text">{user.description}</p>
            </div>
           </div>
            <Link to={`/marketplace/${user._id}`}><button className="profile__btn" type="button">View the Marketplace</button></Link>
        </div>
      </div>
    )
  }
}

export default Profile