import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavDropdownItem from "../components/nav/NavDropdownItem";
import NavItem from "../components/nav/NavItem";
import NavItemGroup from "../components/nav/NavItemGroup";
import NavPane from "../components/nav/NavPane";
import NavPaneGroup from "../components/nav/NavPaneGroup";
import NavBar from "../components/NavBar";
import courseService from "../service/CourseService";
import localStorageService from "../service/LocalStorageService";

function CourseDetails() {
    const token = localStorageService.getToken();
    const isSigned = localStorageService.isSigned();
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
    }, [token, courseId])

    return (
        <>
            <NavBar isSigned={isSigned} theme='dark' />
            <div className="navbar-height"></div>

            {/* TODO: implement roll based view */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Course id: {course.name}</h1>
                        <NavItemGroup>
                            <NavItem title="Activities" target="#nav-activities" active="true" />
                            <NavItem title="Participants" target="#nav-participants" />
                            <NavItem title="Details" target="#nav-details" />

                            <NavDropdownItem title="More">
                                <li><Link to="/" className="dropdown-item text-danger">Some danger option</Link></li>
                            </NavDropdownItem>
                        </NavItemGroup>
                        <NavPaneGroup>
                            <NavPane id="nav-activities" active="true">Activities</NavPane>
                            <NavPane id="nav-participants">Participants</NavPane>
                            <NavPane id="nav-details">Details</NavPane>
                        </NavPaneGroup>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDetails;