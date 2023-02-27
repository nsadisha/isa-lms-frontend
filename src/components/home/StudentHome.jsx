import banner from "../../assets/img/student-banner.jpg";
import Course from "../Course";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import courseService from "../../service/CourseService";
import studentService from "../../service/StudentService";
import localStorageService from "../../service/LocalStorageService";

function StudentHome() {
    const token = localStorageService.getToken();
    const [latestCourses, setLatestCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        courseService.getAllCourses()
        .then(res => {
            let size = res.length>4 ? res.length - 4 : 4;
            setLatestCourses(res.slice(size).reverse());
        }).catch(err => {
            console.log(err);
        });
        
        studentService.getEnrolledCourses(token)
        .then(res => {
            let size = res.length>4 ? res.length - 4 : 0;
            setEnrolledCourses(res.slice(size).reverse())
        }).catch(err => {
            console.log(err
            );
        });
    }, [token, setLatestCourses, setEnrolledCourses])

    return (
        <>
            <div className="container-fluid page-banner" style={{ background: `url(${banner}) rgba(0,0,0,0.4)` }}>
                <div className="container">
                    <div className="row vh-100 d-grid align-items-center">
                        <div className="col-md-7">
                            <h1>Learn at the comfort of your own home</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quod, odio nisi iure illo suscipit tempora perferendis facere numquam quos excepturi quis dolor voluptatem eligendi sequi nobis commodi minus enim.</p>
                            <Link to='/dashboard'>
                                <button className="gradiant-btn r-50 px-5">Explore more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <h2 className="w-100 mb-4">Latest courses</h2>
                    {latestCourses.map(course => {
                        return <Course course={course} key={course.id} />
                    })}
                    <div className="col-md-12 py-3 justify-content-center d-flex">
                        <Link to="/">
                            <button className="gradiant-btn r-50 px-5">View all courses</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <h2 className="w-100 mb-4">Enrolled courses</h2>
                    {enrolledCourses.map(course => {
                        return <Course course={course} key={course.id} />
                    })}
                    <div className="col-md-12 py-3 justify-content-center d-flex">
                        <Link to="/">
                            <button className="gradiant-btn r-50 px-5">View enrolled courses</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentHome;