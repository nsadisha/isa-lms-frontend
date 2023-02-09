function TabItemGroup({children}) {
    return (
        <div className="d-flex align-items-start">
            <div className="list-group flex-column list-group w-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {children}
            </div>
        </div>
    );
}

export default TabItemGroup;