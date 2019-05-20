import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth'


class Profile extends Component {
  state={
    user: []
  }

  

  componentDidMount(){
    const service = new AuthService()
    service.getProfile()
      .then(oneUser => {
        const id = this.props.match.params.id
        const allUsers = oneUser.data
        allUsers.filter(user => {
        if( user._id === id ) {
        user = user._id 
        }
        this.setState({user: allUsers})
      })
    })
      .catch(err => err)
  }

  render() {
    const user = this.state.user
    console.log(user)
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ml-3" href='/'>
            <img src={logo} width="40" height="35" alt="logo"/>
          </a>
          <div className="ml-auto">
            <button className="btn btn-md btn-outline-light mr-sm-2" type="button"><Link id="link" to="/login">Login</Link></button>
            <button className="btn btn-md btn-outline-light" type="button"><Link id="link" to="/signup">Signup</Link></button>
          </div>
        </nav>
        <h1>PROFILE</h1>  
        {user.map(oneUser => {
        return(
          <div key={oneUser.id}>
            <h2>{oneUser.name}</h2>
            <h4>{oneUser.company}</h4>
            <p>{oneUser.email}</p>
            <p>{oneUser.jobTitle}</p>
            <p>{oneUser.ein}</p>
            <p>{oneUser.phone}</p>
            <p>{oneUser.website}</p>
            <p>{oneUser.description}</p>
          </div>
          )
       })}
       <Link id="btn__mrkt" to="/marketplace"><button className="section__first__button" type="button">View the Marketplace</button></Link>
      </div>
    )
  }
}

export default Profile
