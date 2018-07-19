// connector to the backend
import axios from 'axios' // the http request library

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
