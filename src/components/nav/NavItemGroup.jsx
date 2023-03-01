function NavItemGroup({ children }) {
    return (
        <nav><div className="nav nav-tabs" role="tablist">{children}</div></nav>
    );
}

export default NavItemGroup;