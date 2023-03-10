import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import CourseDetailsForUnauthenticated from "../components/course/CourseDetailsForUnauthenticated";
import CourseDetailsForManagementStaff from "../components/course/management/CourseDetailsForManagementStaff";
import CourseDetailsForStudent from "../components/course/student/CourseDetailsForStudent";
import CourseDetailsForTeacher from "../components/course/teacher/CourseDetailsForTeacher";
import NavBar from "../components/NavBar";
import courseService from "../service/CourseService";
import localStorageService from "../service/LocalStorageService";

function CourseDetails() {
    const isSigned = localStorageService.isSigned();
    const role = localStorageService.getRole();
    const [course, setCourse] = useState({})
    const { courseId } = useParams();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        courseService.getCourseDetails(courseId)
            .then(res => {
                setCourse(res)
                document.title = res.name
            }).catch(err => {
                setIsError(true);
                setErrorMessage(err.response.data.message);
            })
    }, [courseId]);

    function getCourseDetailsView(role) {
        if (role === "MANAGEMENT_STAFF") {
            return <CourseDetailsForManagementStaff course={course} />
        } else if (role === "TEACHER") {
            return <CourseDetailsForTeacher course={course} />
        } else if (role === "STUDENT") {
            return <CourseDetailsForStudent course={course} />
        }
        return <CourseDetailsForUnauthenticated course={course} />;
    }

    return (
        <>
            <NavBar isSigned={isSigned} theme='dark' />
            <div className="navbar-height mb-5"></div>

            {!isError && getCourseDetailsView(role)}
            {isError && <Alert message={errorMessage} varient="danger" />}
        </>
    );
}

export default CourseDetails;