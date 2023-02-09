import EmptyState from "../EmptyState";

function ManagementHome() {
    return (
        <div className="container">
            <h3>Home (Management Staff)</h3>
            <div className="row justify-content-center py-3">
                <div className="col-md-8">
                    <EmptyState message='No content here!' />
                </div>
            </div>
        </div>
    );
}

export default ManagementHome;