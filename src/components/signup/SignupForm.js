import React from 'react'
import AuthService from '../../services/auth'
import toastr from 'toastr'
import logo from '../../assets/logo.png'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
 
const service = new AuthService()

class SignupForm extends React.Component {

  state={
    form: { 
      email: '', 
      password: '',
      image: '',
      name: '',
      company: '',
      jobTitle: '',
      ein: '',
      phone: '',
      webpage: '',
      description: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    service
    .signup(this.state.form)
    .then(()=>this.props.history.push('/login'))
    .catch(err => toastr.error(err))
  }

  handleInputs = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  render() {
    return (
    <div className="login__form">
      <div className="form__first">
        <Link  to="/"><img id="signup__logo" src={logo} alt="logo"/></Link>
        <h3 className="form__first__h3"><Link id="link" to="/">SETS</Link></h3>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="signup__form">
          <div className="signup__col__one">
            <div className="form-group form__email">
              <label>Email address</label>
              <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email" onChange={this.handleInputs} />
            </div>
            <div className="form-group">
              <label>Select your password</label>
              <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>EIN or RFC number</label>
              <input type="text" name="ein" className="form-control" placeholder="34-564738/SWC434504FA3" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>Company Website</label>
              <input type="text" name="webpage" className="form-control" placeholder="https://www.google.com" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>Complete Name:</label>
              <input type="text" name="name" className="form-control" placeholder="Your name" onChange={this.handleInputs}/>
            </div>
          </div>
          <div className="signup__col__two">
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" name="company" className="form-control" placeholder="Your company name" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" name="jobTitle" className="form-control" placeholder="Job title" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>Enter your phone number</label>
              <input type="number" name="phone" className="form-control" placeholder="55 5465 6543" onChange={this.handleInputs}/>
            </div>
            <div className="form-group">
              <label>Enter a brief description of your company</label>
              <input type="text" name="description" className="form-control" onChange={this.handleInputs}/>
            </div>
            <input type="submit" className="btn btn-warning" value="Sign up"/>
            <div className="form__links">
              <Link to="/" className="form-text text-muted"></Link>
              <Link to="/login" className="form-text text-muted">Already have an account? Log in here.</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default withRouter(SignupForm)