import axios from 'axios'
export const setAxiosConfig = () => {
    const token = localStorage.getItem('token')
    axios.defaults.baseURL = 'http://localhost:4000/'
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const formData = (object) => {
    const form = new FormData()
    for(let [key, value] of Object.entries(object)) {
        form.append(key,value)
    }
    return form
}