import axios from '../axios'
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const deleteUserService = (id) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: id
        }
    })
}

const editUserService = (data) => {
    return axios.put(`/api/edit-user`, data)
}

const getAllCodeService = (inputTpye) => {
    return axios.get(`/api/allcode?type=${inputTpye}`);
}

export {
    handleLoginApi, getAllUsers, createNewUserService,
    deleteUserService, editUserService, getAllCodeService
}