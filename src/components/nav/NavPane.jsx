function NavPane({ active, id, children }) {
    let activeClass = active === 'true' ? 'active' : '';
    return (
        <div
            className={"tab-pane fade show " + activeClass}
            id={id}
            role="tabpanel">
            {children}
        </div>
    );
}

export default NavPane;