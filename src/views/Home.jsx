import { useEffect, useState } from "react";
import localStorageService from "../service/LocalStorageService";
import userService from "../service/UserService";

import NavBar from "../components/NavBar";
import AuthenticatedHome from "../components/authenticated/AuthenticatedHome";
import AnnonymousHome from "../components/non_authenticated/AnnonymousHome";

function Home({title}) {
    const isSigned = localStorageService.isSigned()
    const isFirstTimeAfterSigned = localStorageService.getIsFirstTime();
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

	return (
		<>
            <NavBar isSigned={isSigned} role={userData.role} />
			{
                isSigned ? 
                <AuthenticatedHome data={userData} isFirstTimeAfterSigned={isFirstTimeAfterSigned} /> : 
                <AnnonymousHome />
            }
		</>
	);
}

export default Home;