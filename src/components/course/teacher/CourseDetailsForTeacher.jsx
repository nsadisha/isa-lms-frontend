import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courseService from "../../../service/CourseService";
import localStorageService from "../../../service/LocalStorageService";
import NavDropdownItem from "../../nav/NavDropdownItem";
import NavItem from "../../nav/NavItem";
import NavItemGroup from "../../nav/NavItemGroup";
import NavPane from "../../nav/NavPane";
import NavPaneGroup from "../../nav/NavPaneGroup";
import Activities from "./Activities";
import Details from "./Details";
import Participants from "./Participants";

function CourseDetailsForTeacher({ course }) {
    const token = localStorageService.getToken();
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        if (course.id === undefined) return;
        courseService.getEnrolledStudents(token, course.id)
        .then(res => {
            setParticipants(res);
        }).catch(err => {
            console.log(err);
        })
    }, [token, course]);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-4">{course.course_code} - {course.name}</h2>
                    <NavItemGroup>
                        <NavItem title="Activities" target="#nav-activities" active="true" />
                        <NavItem title="Participants" target="#nav-participants" />
                        <NavItem title="Details" target="#nav-details" />

                        <NavDropdownItem title="More">
                            <li><Link to="/" className="dropdown-item text-danger">Some danger option</Link></li>
                        </NavDropdownItem>
                    </NavItemGroup>
                    <NavPaneGroup>
                        <NavPane id="nav-activities" active="true">
                            <Activities />
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

export default CourseDetailsForTeacher;