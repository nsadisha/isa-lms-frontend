import Card from "../../Card";
import studentSVG from "../../../assets/img/student.svg";
import teacherSVG from "../../../assets/img/teacher.svg";
import managementSVG from "../../../assets/img/management.svg";

function Home({ users }) {

    const studentCount = getRollCount('STUDENT');
    const teacherCount = getRollCount('TEACHER');
    const managementStaffCount = getRollCount('MANAGEMENT_STAFF');

    function getRollCount(role) {
        return users.filter(u => { return u.role === role }).length;
    }

    return (
        <>
            <h4 className="mb-3 mt-4">User stats</h4>
            <div className="row">
                <div className="col-md-4">
                    <Card header='Students' body={'Count: ' + studentCount} icon={studentSVG} />
                </div>
                <div className="col-md-4">
                    <Card header='Teachers' body={'Count: ' + teacherCount} icon={teacherSVG} />
                </div>
                <div className="col-md-4">
                    <Card header='Management Staff' body={'Count: ' + managementStaffCount} icon={managementSVG} />
                </div>
            </div>
        </>
    );
}

export default Home;