import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import localStorageService from '../service/LocalStorageService';
import userService from "../service/UserService";

import NavBar from "../components/NavBar";
import ProfilePhoto from "../components/ProfilePhoto";

import '../assets/css/profile.scss'

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
        <NavBar isSigned={isSigned}/>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-3">
                    <ProfilePhoto letters={displayLetteres} />

                    <h2 className='mt-3'>{userData.first_name} {userData.last_name}</h2>
                    <p>{userData.email}</p>
                    <span class="badge rounded-pill text-bg-primary">{userData.role}</span>
                </div>
                <div className="col-md-9">There</div>
                </div>
            </div>
        </>
     );
}

export default Profile;