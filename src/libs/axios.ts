// libs
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
})

export default instance