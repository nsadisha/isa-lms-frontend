import Details from "./Details";

function CourseDetailsForUnauthenticated({ course }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Details course={course} />
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsForUnauthenticated;