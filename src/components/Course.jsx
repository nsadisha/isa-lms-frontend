import "../assets/css/course.scss";
import courseSvg from "../assets/img/course.svg";

function Course({course, col=3}) {
    return (
        <div className={`col-sm-6 col-md-6 col-lg-6 col-xl-${col} mb-3`}>
            <div className="course">
                <div className="image">
                    <img src={courseSvg} alt="course svg" />
                </div>
                <div className="mx-3 mt-4">
                    <h5 className="name mb-1">{course.name}</h5>
                    <p className="code"><strong>{course.course_code}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Course;