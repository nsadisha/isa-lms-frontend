function NavItem({ title, target, active }) {
    let activeClass = active === 'true' ? 'active' : '';
    return (
        <button
            className={"nav-link " + activeClass}
            data-bs-toggle="tab"
            data-bs-target={target}
            type="button">
            {title}
        </button>
    );
}

export default NavItem;