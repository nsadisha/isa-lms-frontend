import axios from "axios";

class ManagementStaffService {
    async getAllUsers(token) {
        return axios.get('/management/get_all_users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }

    async assignNewMember(token, data) {
        return axios.post('/management/assign', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }
}

let managementStaffService = new ManagementStaffService();
export default managementStaffService;