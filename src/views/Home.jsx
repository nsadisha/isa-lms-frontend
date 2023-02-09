import { useEffect, useState } from "react";
import localStorageService from "../service/LocalStorageService";
import userService from "../service/UserService";

import NavBar from "../components/NavBar";
import StudentHome from "../components/home/StudentHome";
import Alert from "../components/Alert";
import TeacherHome from "../components/home/TeacherHome";
import ManagementHome from "../components/home/ManagementHome";
import AnnonymousHome from "../components/home/AnnonymousHome";

function Home({title}) {
    const isSigned = localStorageService.isSigned()
    const isFirstTimeAfterSigned = localStorageService.getIsFirstTime();
    const role = localStorageService.getRole();
    const [userData, setUserData] = useState({});

    
    useEffect(() => {
        if(isSigned){
            const token = localStorageService.getToken();
            userService.getCurrentUserInfo(token)
            .then(data => {
                setUserData(data);
            }).catch(err => {
                console.log(err);
            })
        }
        document.title = title;
    }, [isSigned, title])

    function getUserHome(role) {
        if(role==="MANAGEMENT_STAFF"){
            return <ManagementHome />
        }else if(role==="TEACHER"){
            return <TeacherHome />
        }else if(role==="STUDENT"){
            return <StudentHome />
        }
        return <AnnonymousHome />
    }

    function displayWelcomeMessage() {
        if(isFirstTimeAfterSigned && isSigned) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Alert message={"Welcome back "+userData.first_name+"!"} />
                        </div>
                    </div>
                </div>
            );
        }
    }

	return (
		<>
            <NavBar isSigned={isSigned} />
            <div className="mb-3"></div>

            {displayWelcomeMessage()}

            {getUserHome(role)}
		</>
	);
}

export default Home;