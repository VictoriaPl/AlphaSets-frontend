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
        <Link to="/addData"><button>Add data</button></Link>
        {data.map((oneData, i) => {
        return(
          <div key={i} className="card mb-3" style={{maxWidth: '540px', marginLeft: '30%'}}>
            <div className="row no-gutters">
              <div className="col-md-4">
                 <img src="..." className="card-img" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{oneData.name}</h5>
                  <p className="card-text">{oneData.description}</p>
                  <p className="card-text"><small className="text-muted">{oneData.format}</small></p>
                  <p className="card-text">{oneData.value}$</p>
                </div>
              </div>
            </div>
          </div>
          )
       })}
      </div>
    )
  }
}

export default Marketplace

//className={styles.}


