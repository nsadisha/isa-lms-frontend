function NavDropdownItem({ title, children }) {
    return (
        <>
            <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button">
                {title}
            </button>

            <ul className="dropdown-menu">
                {children}
            </ul>
        </>
    );
}

export default NavDropdownItem;