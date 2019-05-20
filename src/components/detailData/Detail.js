import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import AddDataService from '../../services/data'
//import styles from './marketplace.module.css'

class Marketplace extends Component {
  state={
    data: []
  }
  componentDidMount(){
    const service = new AddDataService()
    service.getDetail()
    .then(oneData => {
      console.log(oneData)
      const id = this.props.match.params.id
      console.log(id)
      const allData = oneData
      allData.filter(data => {
      if( data._id === id ) {
      data = data._id 
      }
      this.setState({user: allData})
    })
   })
  }

  render() {
    const data = this.state.data
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ml-3" href='/'>
            <img src={logo} width="40" height="35" alt="logo"/>
          </a>
          <div className="ml-auto">
            <button className="btn btn-md btn-outline-light mr-sm-2" type="button"><Link id="link" to="/login">Login</Link></button>
            <button className="btn btn-md btn-outline-light" type="button"><Link id="link" to="/signup">Signup</Link></button>
          </div>
        </nav>
        <div className="row">
          <h1>DETAIL</h1>  
          <Link to="/buyData" >Buy data</Link>
        </div>
        {data.map((oneData, i) => {
        return(
          <div key={i} className="card mb-3 mt-3" style={{maxWidth: '940px', marginLeft: '20%'}}>
            <div className="row no-gutters">
              <div className="col-md-15">
                <Link to={`/detail/${oneData._id}`}><div className="card-body"> 
                  <h5 className="card-title">{oneData.name}</h5>
                  <p className="card-text">{oneData.description}</p>
                  <p className="card-text"><small className="text-muted">{oneData.format}</small></p>
                  <p className="card-text">{oneData.value}$</p>
                </div></Link>
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

