import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'

class Download extends Component {
  render() {
    const {id} = this.props.match.params
    return(
      <div>  
        <Link to='/'><img src={logo} width="40" height="35" alt="logo"/></Link>
        <h1>Thanks for your purchase</h1>
        <button>If your download doesn't start immediately, click here to download.</button>
        <Link to={`/marketplace/${id}`}>Go back to the marketplace</Link>
      </div>
    )
  }
}

export default Download