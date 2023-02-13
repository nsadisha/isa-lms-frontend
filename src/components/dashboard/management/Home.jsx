import Card from "../../Card";

function Home({users}) {

    const studentCount = getRollCount('STUDENT');
    const teacherCount = getRollCount('TEACHER');
    const managementStaffCount = getRollCount('MANAGEMENT_STAFF');
    
    function getRollCount(role) {
        return users.filter(u => {return u.role===role}).length;
    }

    return (
        <>
        <h4 className="mb-3 mt-4">User stats</h4>
        <div className="row">
            <div className="col-md-4">
                <Card header='Students' body={'Count: '+studentCount} />
            </div>
            <div className="col-md-4">
                <Card header='Teachers' body={'Count: '+teacherCount} />
            </div>
            <div className="col-md-4">
                <Card header='Management Staff' body={'Count: '+managementStaffCount} />
            </div>
        </div>
        </>
    );
}

export default Home;