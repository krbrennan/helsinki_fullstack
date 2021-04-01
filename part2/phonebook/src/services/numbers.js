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

const personToDelete = (obj) => {
    return axios.delete(`${baseUrl}/${obj.id}`).then((res) => obj)
}


const updateNumber = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(res => res.data) 
    // return axios.put(`${baseUrl}/${id}`, newObj)
}



export default {
    getAll,
    create,
    personToDelete,
    updateNumber
}