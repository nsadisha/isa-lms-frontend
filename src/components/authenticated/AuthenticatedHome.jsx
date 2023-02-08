import Alert from "../Alert";

function AuthenticatedHome({data, isFirstTimeAfterSigned}) {

    return ( 
        <>
            <div className="container">
                <div className="row justify-content-center py-3">
                    <div className="col-md-6">
                        {isFirstTimeAfterSigned && <Alert message={"Welcome back "+data.first_name+"!"} />}
                    </div>
                </div>
            </div>
        </>
     );
}

export default AuthenticatedHome;