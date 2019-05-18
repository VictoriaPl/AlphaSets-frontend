import React from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <div className="login__form">
      <div className="form__first">
        <img className="form__first__img" src={logo} alt="logo"/>
        <h1 className="form__first__h3"><Link id="link" to="/">SETS</Link></h1>
      </div>
      <div className="form__second">
        <div className="form-group form__email">
          <label>Email address</label>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputs} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputs}/>
        </div>
        <input type="submit" className="btn btn-warning" value="Login" onClick={handleSubmit}/>
        <div className="form__links">
          <Link to="/" className="form-text text-muted">Forgot your password?</Link>
          <Link to="/signup" className="form-text text-muted">New here? Create an account.</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm