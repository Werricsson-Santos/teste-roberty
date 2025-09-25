import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/api"
})

export const getExecutions = () => api.get('/executions').then(data => data.data)