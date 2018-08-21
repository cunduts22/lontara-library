import axios from 'axios'
import { fetchSuccess } from '../actions';
import {store} from '../store'
import { formData } from '../utils/helper';
export const authUser = async (payload) => {
    return await axios({
        url : '/auth/login',
        method : 'POST',
        data : payload
    })
        .then(response => ({response}))
        .catch(error => ({error: error.response}))
}

export const getUser = async () => {
    const id = localStorage.getItem('id')
    return await axios({
        url: '/admin/user/'+id,
        method: 'GET',
        onDownloadProgress: progress => {
            let percent = Math.round((progress.loaded * 100) / progress.total)
            store.dispatch(fetchSuccess(percent, true))
        }
    })
        .then(response => ({response}))
        .catch(error => ({error: error.response}))
}

export const editUser = async (payload) => {
    const id = localStorage.getItem('id')
    return await axios({
        url: '/admin/user/'+id,
        method: 'patch',
        header: {
            'Content-Type': 'application/json'
        },
        data: payload,
        onUploadProgress: progress => { 
            let percent = Math.round((progress.loaded * 100) / progress.total)
            store.dispatch(fetchSuccess(percent, true)) // dispatch redux store action
        }
    })
        .then(response => ({ response }))
        .catch(error => ({ error }))

}

export const changeImages = async (payload) => {
    const id = localStorage.getItem('id')
    // const formData = new FormData()
    // formData.append('images',payload)
    return await axios({
        url: '/admin/images/'+id,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData(payload)
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}