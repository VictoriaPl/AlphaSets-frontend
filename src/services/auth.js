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
  getProfile = () => {
    return this.service
    .get('/profile')
    .then(user => user)
    .catch(err => err)
  }
}

export default AuthService