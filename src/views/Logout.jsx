import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import authService from "../service/AuthService";
import localStorageService from "../service/LocalStorageService";

function Logout({ title }) {
    const navigate = useNavigate();
    useEffect(() => {
        //TODO: fix logout endpoint
        // authService.logout().then(res => {
        //     console.log("logged out");
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err.response.data);
        // })
        localStorageService.clearAll();
        document.title = title;
        navigate('/')
    }, [title, navigate])

    return (
        <div className="container vh-100 d-grid align-items-center text-center">
            <p className="text-secondary">Logging you out...</p>
        </div>
    );
}

export default Logout;