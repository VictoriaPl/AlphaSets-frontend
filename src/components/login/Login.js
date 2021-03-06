import React, { Component } from 'react'
import LoginForm from './LoginForm'
import AuthService from '../../services/auth'
import toastr from 'toastr'

const service = new AuthService()

class Login extends Component {
  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (user) return this.props.history.push('/login')
  }

  state = {
    form: {
      email: '',
      password: '',
      ein: '',
      webpage: ''
    }
  }

  handleInputs = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmit = () => {
    const { form } = this.state
    service
      .login(form)
      .then(response=>{
        if (response.err) return toastr.error(response.err)
        this.props.history.push(`/profile/${response._id}`)
        toastr.success('Successful login')
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
      })
      .catch(err => err)
  }

  render() {
    return (
      <div>
        <LoginForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Login