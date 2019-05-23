import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddDataService from '../../services/data'
import styles from '../marketplace/marketplace.module.css'
//import PaypalButton from '../buyData/PayPalButton'
import {Link} from 'react-router-dom'
import paypalBtn from '../../assets/paypal.png'
import payment from '../../assets/payment.png'

// const CLIENT = {
//   sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
//   production: process.env.CLIENT_ID,
// };

// const ENV = process.env.NODE_ENV === 'production'
//   ? 'production'
//   : 'sandbox';

class Detail extends Component {
  state={
    data: [],
    image: undefined
  }

  componentDidMount(){
    const service = new AddDataService()
    service.getDetail()
    .then(oneData => {
      const id = this.props.match.params.id
      const allData = oneData.data
      allData.filter(data => {
      if( data._id === id ) {
        return(
          this.setState({data: data})
        )
      } else {
        return 'Error'
      }
    })
   })
   .catch(err => err)
  }

  payment = () => {
    this.setState({image: payment})
  }

  render() {
    // const onSuccess = (payment) =>
    //    console.log('Successful payment!', payment);

    //   const onError = (error) =>
    //    console.log('Erroneous payment OR failed to load script!', error);

    //   const onCancel = (data) =>
    //    console.log('Cancelled payment!', data);
    const {data, image} = this.state
    return (
      <div>
          {!(image === undefined)? 
            <div className={styles.marketplace} style={{backgroundColor: '#747272', height: '100vh'}}>
             <Link to={`/download/${data._id}`}><img src={payment} id={styles.paypalImg} alt="payment" style={{width: '400px', position: 'absolute', marginLeft: '35%', marginTop: '7%', borderRadius: '1%', boxShadow: '0 0  1em #585858'}} /></Link> 
             </div>
             : <div></div>} 
          {(image === undefined)?
          <div className={styles.marketplace}>
          <div>
          <h1 style={{marginLeft: '20.2%', paddingTop: '2%', color: 'white'}}>DATA DETAIL</h1> 
            <div key={data._id} id={styles.detailCard} className="card mb-3 mt-3" style={{maxWidth: '740px', marginLeft: '20%'}}>
              <div className="row no-gutters">
                <div className="col-md-15" >
                  <div className="card-body" > 
                    <h2 className="card-title">{data.name}</h2>
                    <div className="row">
                      <p className="card-text px-2 ml-2"><small className="text-muted">Format:  {data.format}</small></p>
                      <p className="card-text px-2"><small>Type: {data.type}</small></p>
                      <p className="card-text px-2"><small>Licence: {data.license}</small></p>
                    </div>
                    <h6 className="card-text mt-2">Description:</h6>
                    <p>{data.description}</p>
                    <h6 className="mt-3">Time Frame:</h6>
                    <div className="row" style={{marginLeft: '0%'}}>
                      <p className="card-text mr-2">From: {data.timeFrameFrom}</p>
                      <p className="card-text">To: {data.timeFrameTo}</p>
                    </div>
                    <h6 className="card-text mt-2">Source:</h6>
                    <p>{data.source}</p>
                    <h6 className="card-text">Industry:</h6>
                    <p>{data.industry}</p>
                    <h5 className="card-text" style={{marginLeft: '90%'}}>{data.value}$</h5>
                  </div>
                </div>
                </div>
              </div>
              </div>
            <div style={{marginLeft: '40%', width: "20%"}}>
            <img alt="paypalbtn" id={styles.paypalBtn} src={paypalBtn} width="300" onClick={this.payment}/>
            {/* <PaypalButton 
             client={CLIENT}
             env={ENV}
             commit={true}
             currency={'USD'}
             total={data.value}
             onSuccess={onSuccess}
             onError={onError}
             onCancel={onCancel}
           /> */}
            </div>
          </div>
              : <div></div>
          }
      </div>
    )
  }
}

export default Detail