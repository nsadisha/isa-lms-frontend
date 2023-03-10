import { useEffect, useState } from "react";
import localStorageService from "../service/LocalStorageService";
import userService from "../service/UserService";

import NavBar from "../components/NavBar";
import StudentHome from "../components/home/StudentHome";
import Alert from "../components/Alert";
import TeacherHome from "../components/home/TeacherHome";
import ManagementHome from "../components/home/ManagementHome";
import AnnonymousHome from "../components/home/AnnonymousHome";
import { useNavigate } from "react-router-dom";

function Home({ title }) {
    const isSigned = localStorageService.isSigned()
    const isFirstTimeAfterSigned = localStorageService.getIsFirstTime();
    const role = localStorageService.getRole();
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (isSigned) {
            const token = localStorageService.getToken();
            userService.getCurrentUserInfo(token)
                .then(data => {
                    setUserData(data);
                }).catch(err => {
                    console.log(err);
                    //if any error
                    localStorageService.clearAll();
                    navigate('/login')
                })
        }
        document.title = title;
    }, [isSigned, title, navigate])

    function getUserHome(role) {
        if (role === "MANAGEMENT_STAFF") {
            return <ManagementHome />
        } else if (role === "TEACHER") {
            return <TeacherHome />
        } else if (role === "STUDENT") {
            return <StudentHome />
        }
        return <AnnonymousHome />
    }

    function displayWelcomeMessage() {
        if (isFirstTimeAfterSigned && isSigned) {
            return (
                <Alert message={"Welcome " + userData.first_name + "!"} />
            );
        }
    }

    return (
        <>
            <NavBar isSigned={isSigned} />

            {displayWelcomeMessage()}

            {getUserHome(role)}
        </>
    );
}

export default Home;