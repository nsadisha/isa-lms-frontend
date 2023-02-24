import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetailsForTeacher from "../components/course/teacher/CourseDetailsForTeacher";
import NavBar from "../components/NavBar";
import courseService from "../service/CourseService";
import localStorageService from "../service/LocalStorageService";

function CourseDetails() {
    const token = localStorageService.getToken();
    const isSigned = localStorageService.isSigned();
    const role = localStorageService.getRole();
    const [course, setCourse] = useState({})
    const { courseId } = useParams();

    useEffect(() => {
        courseService.getCourseDetails(token, courseId)
            .then(res => {
                setCourse(res)
                document.title = res.name
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }, [token, courseId]);

    function getCourseDetailsView(role){
        if (role === "MANAGEMENT_STAFF") {
            return "mgt"
        } else if (role === "TEACHER") {
            return <CourseDetailsForTeacher course={course} />
        } else if (role === "STUDENT") {
            return "student"
        }
        return "qweqwe"
    }

    return (
        <>
            <NavBar isSigned={isSigned} theme='dark' />
            <div className="navbar-height"></div>

            {getCourseDetailsView(role)}
        </>
    );
}

export default CourseDetails;