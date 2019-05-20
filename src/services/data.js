import axios from 'axios'
const baseURL = 'http://localhost:3000/data'

class AddDataService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  addData = data => {
    return this.service
      .post('/addData', data)
      .then(({ data }) => data)
      .catch(err => err)
  }
  getData = () => {
    return this.service
      .get('/marketplace')
      .then(({data}) => data)
      .catch(err => err)
  }
  getDetail = () => {
    return this.service
    .get('/detail')
    .then(detail => detail)
    .catch(err => err)
  }
}

export default AddDataService