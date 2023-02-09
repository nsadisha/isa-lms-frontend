import EmptyState from "../../EmptyState";

function StudentDashboard() {
    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <EmptyState message="No content here!" />
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;