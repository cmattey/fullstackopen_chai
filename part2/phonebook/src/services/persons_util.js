import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newPersonObj) => {
  const request = axios.post(baseUrl, newPersonObj)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    // console.log('del header', response)
    return response
  })

}

export default {getAll, create, remove}
