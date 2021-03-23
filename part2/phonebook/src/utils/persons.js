import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const addOne= async (person) => {
    const response = await axios.post(baseUrl, person);
    return response.data;
}

const deleteOne = async (id) => {
    const result = await axios.delete(`${baseUrl}/${id}`)
    return result.data;
}

export default {
    getAll,
    addOne,
    deleteOne
}