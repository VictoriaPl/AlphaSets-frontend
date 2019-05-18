import React, { Component } from 'react'
import DataForm from './dataFrom'
import AddDataService from '../../services/data'
import toastr from 'toastr'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDdwmIHCyjlIT4jIxWrR1rH2vzeAucsmg8",
  authDomain: "alpha-sets.firebaseapp.com",
  databaseURL: "https://alpha-sets.firebaseio.com",
  projectId: "alpha-sets",
  storageBucket: "alpha-sets.appspot.com",
  messagingSenderId: "286252857484",
  appId: "1:286252857484:web:a15289f14eaad2b1"
};

firebase.initializeApp(firebaseConfig);

const service = new AddDataService()

class AddData extends Component {

  state={
    data: {
      name: '',
      description: '',
      value: '',
      type: 'rawData',
      industry: '',
      timeFrame: '',
      source: '',
      format: 'CSV',
      license: '',
      uploadValue: 0
    }
  }

  handleInputs = e => {
    const { data } = this.state
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { data } = this.state
    data.value = Number(data.value)
    service
      .addData(data)
      .then(response=>{
        if (response.err) return toastr.error(response.err)
        this.props.history.push('/marketplace')
        toastr.success('Success!')
      })
      .catch(err => {
        console.log(err)
      })
  }


  handleOnChange = e => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(`dataFiles`).child(file.name)
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({uploadValue: percentage})
    }, (error) => {
      this.setState({msg: 'Error'})
    }, () => {
      this.setState({msg: 'Success!'})
    })
  }

  render() {
    return (
      <div>
        <DataForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange} uploadValue={this.state.uploadValue} />
      </div>
    )
  }
}

export default AddData