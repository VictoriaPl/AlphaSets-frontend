import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import AddDataService from '../../services/data'
//import styles from './signup.module.css'

class Marketplace extends Component {
  state={
    data: []
  }
  componentDidMount(){
    const service = new AddDataService()
    service.getData()
      .then(alldata => {
        this.setState({data: alldata})
      })
  }

  render() {
    const data = this.state.data
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
        <h1>MARKETPLACE</h1>  
        <button><Link to="/addData">Add data</Link></button>
        {data.map(oneData => {
        return(
          <div key={oneData.id}>
            <h2>{oneData.name}</h2>
            <p>{oneData.description}</p>
            <p>{oneData.value}</p>
            <p>{oneData.format}</p>
          </div>
          )
       })}
      </div>
    )
  }
}

export default Marketplace

//className={styles.}


profile: {
  email: '',
  name: '',
  company: '',
  jobTitle: '',
  curp: '',
  ein: '',
  rfc: '',
  phone: '',
  website: '',
  description: '',
},