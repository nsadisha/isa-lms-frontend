import Toast from "../../Toast";
import { useState } from "react";
import localStorageService from "../../../service/LocalStorageService";
import teacherService from "../../../service/TeacherService";

function AddNewCourse({ successCallback }) {
    const token = localStorageService.getToken();
    const [course, setCourse] = useState({
        name: "",
        description: "",
        course_code: ""
    });
    const [emailErrMsg, setEmailErrorMessage] = useState("");
    const [isInvalid, setIsInvalid] = useState('')
    const [showToast, setShowToast] = useState('false')

    function handleAddNewCourse(e) {
        e.preventDefault();
        teacherService.createNewCourse(token, course)
            .then(res => {
                successCallback();

                setIsInvalid('');
                setShowToast('true');
                resetForm()
            }).catch(err => {
                setShowToast('false');
                setIsInvalid('is-invalid');
                setEmailErrorMessage(err.response.data.message || "");
            })
    }

    function resetForm() {
        setCourse({
            name: "",
            description: "",
            course_code: ""
        })
    }

    return (
        <div className="row">
            <div className="col-12">
                <form onSubmit={handleAddNewCourse}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="course-name" className="form-label">Course name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="course-name"
                                    value={course.name}
                                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="course-code" className="form-label">Course code</label>
                                <input
                                    type="text"
                                    className={`form-control ${isInvalid}`}
                                    id="course-code"
                                    value={course.course_code}
                                    onChange={(e) => setCourse({ ...course, course_code: e.target.value })}
                                    required />
                                <div id="courseCodeFeedback" className="invalid-feedback">
                                    {emailErrMsg}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Course description</label>
                                <textarea
                                    id="course-description"
                                    className="form-control"
                                    value={course.description}
                                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                                    rows="5">
                                </textarea>
                                <div id="passwordFeedback" className="invalid-feedback">
                                    {emailErrMsg}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <button type="submit" className="gradiant-btn r-50">Create course</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Toast
                message='New course module added to the system.'
                show={showToast}
                onDismissed={() => { setShowToast('false') }} />
        </div>
    );
}

export default AddNewCourse;