import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    axios
        .get(baseUrl)    
        .then((res)=>{
            return res
        })
        const request = axios.get(baseUrl)
        return request.then((response) => {
            return response.data
        })
}


const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}


export default {
    getAll,
    create
}