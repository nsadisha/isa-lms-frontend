import { Link } from "react-router-dom";

function NavBar({isSigned}) {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar scroll</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to='/'>Action</Link></li>
                                <li><Link className="dropdown-item" to='/'>Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item text-danger" to='/'>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;