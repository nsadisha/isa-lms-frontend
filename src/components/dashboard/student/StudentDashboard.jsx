import { useEffect, useState } from "react";
import localStorageService from "../../../service/LocalStorageService";
import studentService from "../../../service/StudentService";
import TabItem from "../../tab/TabItem";
import TabItemGroup from "../../tab/TabItemGroup";
import TabPane from "../../tab/TabPane";
import TabPaneGroup from "../../tab/TabPaneGroup";
import EnrolledCourses from "./EnrolledCourses";

function StudentDashboard() {
    const token = localStorageService.getToken();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        studentService.getEnrolledCourses(token).then(res => {
            setCourses(res);
        }).catch(err => {
            console.log(err);
        })
    }, [token])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 mb-3">
                    <TabItemGroup>
                        <TabItem title="Courses" target="#enrolled-courses" active="true" />
                    </TabItemGroup>
                </div>
                <div className="col-md-9">
                    <TabPaneGroup>
                        <TabPane id="enrolled-courses" active="true">
                            <h2 className="mb-3">Courses</h2><hr className="text-secondary" />
                            <EnrolledCourses courses={courses} />
                        </TabPane>
                    </TabPaneGroup>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;