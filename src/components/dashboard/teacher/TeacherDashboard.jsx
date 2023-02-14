import EmptyState from "../../EmptyState";

function TeacherDashboard() {
    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <EmptyState message="Dashboard for teachers...!" />
                </div>
            </div>
        </div>
    );
}

export default TeacherDashboard;