import axios from "axios";

class ManagementStaffService{
    async getAllUsers(token) {
        return axios.get('/management/get_all_users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res;
        }).catch(err => {
            throw err;
        })
    }
}