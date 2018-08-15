import axios from 'axios'
const url = 'http://localhost:4000/'

export const authUser = async (payload) => {
    return await axios({
        url : url+'auth/login',
        method : 'PATCH',
        data : payload
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const checkAuthentication = async () => {
    if(localStorage.getItem('token') === undefined) {
        return  { error : 
                    { response : 
                        { message: 'unauthorized user' } 
                    } 
                }
    } else {
        return await axios({
            url: url+'for-test?token='+localStorage.getItem('token'),
            method: 'GET'
        })
            .then(response => ({response}))
            .catch(error => ( 
                    { error: error.response ? 
                        error : { 
                            response: { 
                                message: 'unauthorized user'
                            }
                        }
                    }))
    }
}