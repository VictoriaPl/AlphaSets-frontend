import axios from 'axios'
const baseURL = 'http://localhost:3000/auth'


class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  signup = form => {
    return this.service
      .post('/signup', form)
      .then(({ data }) => data)
      .catch(err => err)
  }
  login = form => {
    return this.service
      .post('/login', form)
      .then(response => {
        return response.data
      })
      .catch(err => {
        return { err: 'Incorrect password' }
      })
  }
  logout = () => {
    return this.service
    .get('/logout')
    .then(res => res)
    .catch(err => err)
  }
  getProfile = () => {
    return this.service
    .get('/profile')
    .then(user => user)
    .catch(err => err)
  }
  loggedin = () => {
    return this.service
    .get('/loggedin')
    .then(response => response)
    .catch(err => err)
  }
}

export default AuthService