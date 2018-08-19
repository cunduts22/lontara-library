import axios from 'axios'
const url = 'http://localhost:4000/'

export const authUser = async (payload) => {
    return await axios({
        url : url+'auth/login',
        method : 'POST',
        data : payload
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const getUser = async () => {
    const id = localStorage.getItem('id')
    return await axios({
        url: url+'admin/user/'+id,
        method: 'GET'
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const editUser = async (payload) => {
    const id = localStorage.getItem('id')
    return await axios({
        url: url+'admin/user/'+id,
        method: 'patch',
        header: {
            'Content-Type': 'application/json'
        },
        data: payload
    })
        .then(response => ({ response }))
        .catch(error => ({ error }))

}

export const changeImages = async (payload) => {
    const id = localStorage.getItem('id')
    const formData = new FormData()
    formData.append('images',payload)
    return await axios({
        url: url+'admin/images/'+id,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}