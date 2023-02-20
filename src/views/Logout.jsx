import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/AuthService";
import localStorageService from "../service/LocalStorageService";

function Logout({ title }) {
    const navigate = useNavigate();
    const token = localStorageService.getToken();
    useEffect(() => {
        document.title = title;

        authService.logout(token).then(res => {
            localStorageService.clearAll();
            navigate('/')
        }).catch(err => {
            console.log(err.response.data);
        })

    }, [title, token, navigate])

    return (
        <div className="container vh-100 d-grid align-items-center text-center">
            <p className="text-secondary">Logging you out...</p>
        </div>
    );
}

export default Logout;