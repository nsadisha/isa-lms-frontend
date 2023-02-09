function TabItem({target, title, active}) {
    let activeClass = active==='true' ? 'active' : '';
    return (
        <button className={"list-group-item list-group-item-action "+activeClass} data-bs-toggle="pill" data-bs-target={target} type="button">{title}</button>
    );
}

export default TabItem;