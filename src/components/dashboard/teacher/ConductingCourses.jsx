import Course from "../../Course";
import EmptyState from "../../EmptyState";

function ConductingCourses({courses}) {
    function showEmptyMessage() {
        return (<div className="col-12"><EmptyState message="You don't conduct any courses yet." /></div>);
    }

    return (
        <div className="row">
            {courses.length === 0 && showEmptyMessage()}
            {courses.map(course => {return <Course course={course} key={course.id} />})}
        </div>
    );
}

export default ConductingCourses;