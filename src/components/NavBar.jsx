import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ isSigned, theme }) {
    const [scrollClass, setScrollClass] = useState('')
    function handleOnScrollEffect() {
        if (window.scrollY > 100) {
            setScrollClass('scrolling')
        } else {
            setScrollClass('')
        }
    }

    document.addEventListener('scroll', handleOnScrollEffect)

    return (
        <nav className={`navbar ${theme} ${scrollClass} fixed-top navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>ISA LMS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                        {isSigned &&
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                            </li>
                        }
                        {!isSigned &&
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                        }
                        {!isSigned &&
                            <li className="nav-item">
                                <Link className="nav-link" to='/register'>Register</Link>
                            </li>
                        }
                        {isSigned &&
                            <li className="nav-item dropdown ">
                                <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item text-danger" to='/logout'>Logout</Link></li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;