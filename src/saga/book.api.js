import axios from 'axios'
import { fetchSuccess } from '../actions';
import {
    store
} from '../store'

export const getAllBooks = async (pages) => {
    return await axios({
        url: '/admin/limit-book?pages='+pages,
        method: 'get',
        onDownloadProgress: progress => {
            let percent = Math.round((progress.loaded * 100) / progress.total)
            store.dispatch(fetchSuccess(percent, true))
        }
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

