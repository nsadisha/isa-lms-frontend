import banner from "../../assets/img/teaching-banner.jpg"
import { Link } from "react-router-dom";

function TeacherHome() {
    return (
        <>
            <div className="container-fluid page-banner" style={{ background: `url(${banner}) rgba(0,0,0,0.4)` }}>
                <div className="container">
                    <div className="row vh-100 d-grid align-items-center">
                        <div className="col-md-7">
                            <h1>Teach at the comfort of your own home</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quod, odio nisi iure illo suscipit tempora perferendis facere numquam quos excepturi quis dolor voluptatem eligendi sequi nobis commodi minus enim.</p>
                            <Link to='/dashboard'>
                                <button className="gradiant-btn r-50 px-5">View dashboard</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherHome;