import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import AddDataService from '../../services/data'
import styles from './marketplace.module.css'
import logo from '../../assets/logo.png'


class Marketplace extends Component {
  state={
    data: [],
    f: ''
  }
  componentDidMount(){
    const service = new AddDataService()
    service.getData()
      .then(alldata => {
        this.setState({data: alldata})
      })
  }
  
  handleInput = e => {
    this.setState({f: e.target.value})
  }

  search = f => {
    return function(d) {
      return d.industry.toLowerCase().includes(f.toLowerCase()) || !f
    }
  }

  render() {
    const {data, f} = this.state
    return (
      <div className={styles.marketplace}>
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
          <h1 className={styles.marketplaceH1}>MARKETPLACE</h1>  
        </div>
        <div className="row" style={{marginLeft: '18.5%'}}>
          <div className="col-md-4 col-md-offset-3">
            <form action="" className="search-form">
                <div className="form-group has-feedback">
            		  <label className="sr-only">Search</label>
            	  	<input type="text" className="form-control" name="search" id={styles.search} placeholder="search" onChange={this.handleInput} value={f}/>
            	  </div>
            </form>
          </div>
        </div>
        {data.filter(this.search(f)).map((oneData, i) => {
        return(
          <div key={i} className="card mb-3 mt-3" id={styles.cardMgn} style={{maxWidth: '740px', marginLeft: '20%', backgroundColor: 'white'}}>
            <div className="row no-gutters">
              <div className="col-md-15">
                <div id={styles.dataCard} className="card-body"> 
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