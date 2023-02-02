import axios from "axios";

class AuthService {
    async login(_email, _password) {
        return axios.post('/auth/login',
            {
                email: _email,
                password: _password
            }
        ).then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }
}

export default new AuthService();