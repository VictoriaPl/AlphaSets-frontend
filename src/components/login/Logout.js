import React, { Component } from 'react'
import Authservice from '../../services/auth'

const service = new Authservice()

class Logout extends Component {
  logout = () => {
    service.logout()
    .then(res => {
      console.log(res)
      window.localStorage.clear()
      this.props.history.push('/login')
    })
   .catch(err => console.log(err)) 
  }

  render () {
    return(
      <div onClick={this.logout}>
        <button className="btn btn-md btn-outline-light mr-sm-2" id="link" type="button">Logout</button>
      </div>
    )
  }
}

export default Logout


