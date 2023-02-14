import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import localStorageService from '../service/LocalStorageService';
import userService from "../service/UserService";

import NavBar from "../components/NavBar";
import ProfilePhoto from "../components/ProfilePhoto";

import '../assets/css/profile.scss'
import EmptyState from '../components/EmptyState';

function Profile({title}) {

    const navigate = useNavigate();
    const isSigned = localStorageService.isSigned();
    const [userData, setUserData] = useState({});
    const [displayLetteres, setDisplayLetters] = useState("");

    useEffect(() => {
        if(!isSigned){
            navigate('/')
        }

        const token = localStorageService.getToken();
        userService.getCurrentUserInfo(token)
            .then(data => {
                setUserData(data);
                setDisplayLetters(data.first_name[0]+data.last_name[0]);
            }).catch(err => {
                console.log(err);
            })

        document.title = title
    }, [title, navigate, isSigned])

    return ( 
        <>
        <NavBar isSigned={isSigned} theme='dark' />
        <div className="navbar-height"></div>
        <div className="container mt-5">
            <div className="row justify-content-center">
            <div className="col-md-4 text-center">
                <ProfilePhoto letters={displayLetteres} />

                <h2 className='mt-3'>{userData.first_name} {userData.last_name}</h2>
                <p>{userData.email}</p>
                <span className="badge rounded-pill gradiant-bg px-3">{userData.role}</span>
            </div>
            <div className="col-md-9 d-none">
                <EmptyState message='No content here!' />
            </div>
            </div>
        </div>
        </>
     );
}

export default Profile;