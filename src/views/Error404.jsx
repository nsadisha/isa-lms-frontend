import { useEffect } from "react";
import NavBar from "../components/NavBar";

import image404 from '../assets/img/404.png'
import { Link } from "react-router-dom";

function Error404({ title }) {
    useEffect(() => {
        document.title = title
    }, [title]);

    return (
        <>
            <NavBar />
            <div className="container mt-3 mt-sm-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={image404} alt="" style={{ width: '80%' }} className='mb-4 mb-md-0"' />
                    </div>
                    <div className="col-md-6 d-grid align-items-center">
                        <div className='text-center text-md-start'>
                            <h1>Oops! Page not found!</h1>
                            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            <Link to='/'>
                                <button className='gradiant-btn r-50'>Go to Homepage</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error404;