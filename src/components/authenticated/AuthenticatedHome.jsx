import Alert from "../Alert";
import EmptyState from "../EmptyState";

function AuthenticatedHome({data, isFirstTimeAfterSigned}) {

    return (
        <div className="container">
            <div className="row justify-content-center py-3">
                <div className="col-md-6">
                    {isFirstTimeAfterSigned && <Alert message={"Welcome back "+data.first_name+"!"} />}
                    <EmptyState message='No content here!' />
                </div>
            </div>
        </div>
     );
}

export default AuthenticatedHome;