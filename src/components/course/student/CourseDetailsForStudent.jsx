import studentService from "../../../service/StudentService";
import localStorageService from "../../../service/LocalStorageService";
import { useState } from "react";
import { useEffect } from "react";
import NavItem from "../../nav/NavItem";
import NavItemGroup from "../../nav/NavItemGroup";
import NavPane from "../../nav/NavPane";
import NavPaneGroup from "../../nav/NavPaneGroup";
import NavDropdownItem from "../../nav/NavDropdownItem";
import Details from "../Details";
import Participants from "../Participants";
import Activities from "../Activities";
import courseService from "../../../service/CourseService";

function CourseDetailsForStudent({ course }) {
    const token = localStorageService.getToken();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        if (course.id === undefined) return;

        studentService.isEnrolledForCourse(token, course.id).then(res => {
            setIsEnrolled(res);
        }).catch(err => {
            console.log(err);
        })

        courseService.getEnrolledStudents(token, course.id).then(res => {
            setParticipants(res);
        }).catch(err => {
            console.log(err);
        })
    }, [course.id, token]);

    function showEnrollButton() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 text-center">
                    <h4>Get yourself enrolled in this course.</h4>
                    <button className="gradiant-btn r-50 mt-3" onClick={handleEnrollMe}>Enroll me</button>
                </div>
            </div>
        );
    }

    function handleEnrollMe() {
        studentService.enroll(token, course.id).then(res => {
            setIsEnrolled(true);
        }).catch(err => {
            console.log(err);
        });
    }

    function handleUnenrollMe() {
        studentService.unenroll(token, course.id).then(res => {
            console.log(res);
            setIsEnrolled(false);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-4">{course.course_code} - {course.name}</h2>
                    <NavItemGroup>
                        <NavItem title="Activities" target="#nav-activities" active="true" />
                        {isEnrolled && <NavItem title="Participants" target="#nav-participants" />}
                        <NavItem title="Details" target="#nav-details" />
                        {isEnrolled && <NavDropdownItem title="More">
                            <li onClick={handleUnenrollMe} role="button">
                                <p className="dropdown-item text-danger mb-0 cursor-pointer">Unenroll me from this course</p>
                            </li>
                        </NavDropdownItem>}
                    </NavItemGroup>

                    <NavPaneGroup>
                        <NavPane id="nav-activities" active="true">
                            {!isEnrolled && showEnrollButton()}
                            {isEnrolled && <Activities />}
                        </NavPane>
                        <NavPane id="nav-participants">
                            <Participants participants={participants} />
                        </NavPane>
                        <NavPane id="nav-details">
                            <Details course={course} />
                        </NavPane>
                    </NavPaneGroup>
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsForStudent;