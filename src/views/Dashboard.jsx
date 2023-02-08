import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagementStaffDashboard from "../components/dashboard/management/ManagementStaffDashboard";
import StudentDashboard from "../components/dashboard/student/StudentDashboard";
import TeacherDashboard from "../components/dashboard/teacher/TeacherDashboard";
import NavBar from "../components/NavBar";
import localStorageService from "../service/LocalStorageService";

function Dashboard({title}) {
    const navigate = useNavigate();
    const isSigned = localStorageService.isSigned();
    let token = localStorageService.getToken();
    const role = localStorageService.getRole();

    useEffect(() => {
        if(!isSigned){
            navigate('/')
        }

        document.title = title
    }, [title, navigate, isSigned])

    return ( 
        <>
            <NavBar isSigned={isSigned} />

            <div className="mt-5">
                {role==="MANAGEMENT_STAFF" && <ManagementStaffDashboard token={token} />}
                {role==="TEACHER" && <TeacherDashboard token={token} />}
                {role==="STUDENT" && <StudentDashboard token={token} />}
            </div>
        </>
    );
}

export default Dashboard;