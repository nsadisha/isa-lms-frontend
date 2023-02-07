import { useEffect } from "react";

function Profile({data, title}) {

    useEffect(() => {
        document.title = title
    }, [title])

    return ( 
        <div className="container">
            <div className="row">
            <div className="col-md-4">Hello</div>
            <div className="col-md-8">There</div>
            </div>
        </div>
     );
}

export default Profile;