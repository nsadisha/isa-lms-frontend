import { Link } from "react-router-dom";
import NavDropdownItem from "../../nav/NavDropdownItem";
import NavItem from "../../nav/NavItem";
import NavItemGroup from "../../nav/NavItemGroup";
import NavPane from "../../nav/NavPane";
import NavPaneGroup from "../../nav/NavPaneGroup";

function CourseDetailsForTeacher({course}) {
    return (
        <div className="container">
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
    );
}

export default CourseDetailsForTeacher;