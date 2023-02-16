function TabPaneGroup({ id, children }) {
    return (
        <div className="tab-content" id={id}>{children}</div>
    );
}

export default TabPaneGroup;