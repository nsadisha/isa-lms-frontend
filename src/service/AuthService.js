import axios from "axios";

class AuthService {
    async login(_email, _password) {
        return axios.post('/auth/login',
            {
                email: _email,
                password: _password
            }
        ).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }

    async register(data) {
        return axios.post('/auth/register', data)
        .then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }

    async logout() {
        return axios.post('/auth/logout', {})
        .then(res => {
            return res;
        }).catch(err => {
            throw err;
        })
    }
}
const authService = new AuthService();
export default authService;