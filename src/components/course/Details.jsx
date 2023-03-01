function Details({ course }) {
    //return if the details are not loaded yet.
    if(course.conductor === undefined) return;

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-md-12 pt-3">
                <h3>Course details</h3>
                <hr className="mb-4" />
                <h4>Course name: <span className="text-secondary">{course.name}</span></h4>
                <h4>Course code: <span className="text-secondary">{course.course_code}</span></h4>
                <h4>Description:</h4>
                <p>{course.description.length===0 ? "This course does not have any description." : course.description}</p>

                <div className="my-5"></div>

                <h3>Conductor details</h3>
                <hr className="mb-4" />
                <h4>Name: <span className="text-secondary">{course.conductor.first_name} {course.conductor.last_name}</span></h4>
                <h4>Email: <span className="text-secondary">{course.conductor.email}</span></h4>
            </div>
        </div>
    );
}

export default Details;