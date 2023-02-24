import TabItem from "../../tab/TabItem";
import TabItemGroup from "../../tab/TabItemGroup";
import TabPane from "../../tab/TabPane";
import TabPaneGroup from "../../tab/TabPaneGroup";
import ConductingCourses from "./ConductingCourses";

import teacherService from "../../../service/TeacherService";
import { useCallback, useEffect, useState } from "react";
import localStorageService from "../../../service/LocalStorageService";

function TeacherDashboard() {

    const token = localStorageService.getToken();
    const [courses, setCourses] = useState([]);

    const updateCourses = useCallback(() => {
        teacherService.getConductingCourses(token)
        .then(res => {
            setCourses(res);
        }).catch(err => {
            console.log(err);
        })
    }, [token])

    useEffect(() => {
        updateCourses()
    }, [updateCourses])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 mb-3">
                    <TabItemGroup>
                        <TabItem title="Courses" target="#courses" active="true" />
                        <TabItem title="Add new course" target="#new-course" />
                    </TabItemGroup>
                </div>
                <div className="col-md-9">
                    <TabPaneGroup>
                        <TabPane id="courses" active="true">
                            <h2 className="mb-3">Courses</h2><hr className="text-secondary" />

                            <ConductingCourses courses={courses} />
                        </TabPane>
                        <TabPane id="new-course">
                            <h2 className="mb-3">Add new course</h2><hr className="text-secondary" />
                        </TabPane>
                    </TabPaneGroup>
                </div>
            </div>
        </div>
    );
}

export default TeacherDashboard;