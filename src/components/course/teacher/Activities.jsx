import EmptyState from "../../EmptyState";

function Activities() {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-md-8">
                <EmptyState message="This course does not have any activities yet!" />
            </div>
        </div>
    );
}

export default Activities;