import { useEffect, useState } from "react";
import NavItem from "../../nav/NavItem";
import NavItemGroup from "../../nav/NavItemGroup";
import NavPane from "../../nav/NavPane";
import NavPaneGroup from "../../nav/NavPaneGroup";
// import NavDropdownItem from "../../nav/NavDropdownItem";
import Activities from "../Activities";
import Details from "../Details";
import Participants from "../Participants";
import courseService from "../../../service/CourseService";
import localStorageService from "../../../service/LocalStorageService";

function CourseDetailsForManagementStaff({ course }) {
    const token = localStorageService.getToken();
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        if(course.id === undefined) return;

        courseService.getEnrolledStudents(token, course.id).then(res => {
            setParticipants(res);
        }).catch(err => {
            console.log(err);
        })
    }, [token, course.id]);

    // function handleRemoveCourse() {
    //     console.log("remove this course");
    //     // TODO : Implement remove course from the system functionality
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-4">{course.course_code} - {course.name}</h2>
                    <NavItemGroup>
                        <NavItem title="Activities" target="#nav-activities" active="true" />
                        <NavItem title="Participants" target="#nav-participants" />
                        <NavItem title="Details" target="#nav-details" />

                        {/* <NavDropdownItem title="More">
                            <li onClick={handleRemoveCourse} role="button">
                                <span className="dropdown-item text-danger">Delete this course module</span>
                                </li>
                        </NavDropdownItem> */}
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

export default CourseDetailsForManagementStaff;