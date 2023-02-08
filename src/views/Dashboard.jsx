import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagementStaffDashboard from "../components/authenticated/ManagementStaffDashboard";
import StudentDashboard from "../components/authenticated/StudentDashboard";
import TeacherDashboard from "../components/authenticated/TeacherDashboard";
import NavBar from "../components/NavBar";
import localStorageService from "../service/LocalStorageService";

function Dashboard({title}) {
    const navigate = useNavigate();
    const isSigned = localStorageService.isSigned();
    const role = localStorageService.getRole();

    useEffect(() => {
        if(!isSigned){
            navigate('/')
        }

        const token = localStorageService.getToken();

        document.title = title
    }, [title, navigate, isSigned])

    return ( 
        <>
            <NavBar isSigned={isSigned} />

            {role==="MANAGEMENT_STAFF" && <ManagementStaffDashboard />}
            {role==="TEACHER" && <TeacherDashboard />}
            {role==="STUDENT" && <StudentDashboard />}
        </>
    );
}

export default Dashboard;