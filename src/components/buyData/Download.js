import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import '../../App.css'
import firebase from 'firebase'
import DataService from '../../services/data'

const service = new DataService()

class Download extends Component {

  state= {
    data: {}, 
    url: '',
  }

  componentDidMount = () => {
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
     .then(() => {
      const storage = firebase.storage()
      let fileRef = storage.ref(`dataFiles/${this.state.data.fileName}`)
      fileRef.getDownloadURL()
      .then(url => {
        this.setState({url: url})
      })
      .catch(err => err)
     })
     .catch(err => err)
  }

  handleDownload = () => {
    const storage = firebase.storage()
    let fileRef = storage.ref(`dataFiles/${this.state.data.fileName}`)
    fileRef.getDownloadURL()
    .then(url => {
      this.setState({url: url})
    })
    .catch(err => err)
  }

  render() {
    const {id} = this.props.match.params
    const file = this.state.url
    return(
      <div className="download">  
        <div className="row ml-4 p-5">
          <Link to='/' className="download__logo"><img src={logo} width="120" height="105" alt="logo"/></Link>
          <Link to='/' className="ml-2 mt-3"><h2 style={{color: 'white', fontSize: '60px'}}>SETS</h2></Link>
        </div>
        <h1 style={{color: 'white', marginLeft: '30%', marginBottom: '5%'}}>Thanks for your purchase</h1>
        {file ? <a href={file} target="_blank" rel="noopener noreferrer" style={{color: 'white', marginLeft:  '43%', padding: '1% 5%', backgroundColor: '#26b6b2', border: 'none', borderRadius: '5%'}}>LINK</a> : <div></div> }
        <a><h5 style={{color: '#DBDBDB', marginLeft: '25%', marginTop: '2%', marginBottom: '2%'}} onClick={this.handleDownload}>If your link doesn't appears here immediately, click here to download.</h5></a>
        <Link to={`/marketplace/${id}`} className="download__mkt">Go back to the marketplace</Link>
      </div>
    )
  }
}

export default Download