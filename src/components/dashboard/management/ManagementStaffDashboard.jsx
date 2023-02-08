import { useEffect, useState, useCallback } from "react";
import managementStaffService from "../../../service/ManagementStaffService";
import TabItem from "../../tab/TabItem";
import TabItemGroup from "../../tab/TabItemGroup";
import TabPane from "../../tab/TabPane";
import TabPaneGroup from "../../tab/TabPaneGroup";
import AllUsers from "./AllUsers";
import Settings from "./Settings";

function ManagementStaffDashboard({token}) {
    const [users, setUsers] = useState([]);

    const updateUsers = useCallback(() => {
        managementStaffService.getAllUsers(token)
        .then(data => {
            setUsers(data);
        }).catch(err => {
            console.log(err);
        })
    }, [token])

    useEffect(() => {
        updateUsers()
    }, [updateUsers])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TabItemGroup>
                        <TabItem target='#home-tab' title='Home' active='true' />
                        <TabItem target='#stats-tab' title='Statistics' />
                        <TabItem target='#all-users-tab' title='All users' />
                        <TabItem target='#payments-tab' title='Payments' />
                        <TabItem target='#settings-tab' title='Settings' />
                    </TabItemGroup>
                </div>
                <div className="col-md-9">
                    <TabPaneGroup id='management-dashboard-tabs'>
                        <TabPane id='home-tab' active='true'><h2>Home</h2></TabPane>
                        <TabPane id='stats-tab'><h2>Statistics</h2></TabPane>
                        <TabPane id='all-users-tab'>
                            <h2 className="mb-3">All users</h2><hr className="text-secondary" />
                            <AllUsers users={users} />
                        </TabPane>
                        <TabPane id='payments-tab'><h2>Payments</h2></TabPane>
                        <TabPane id='settings-tab'>
                            <h2 className="mb-3">Settings</h2><hr className="text-secondary" />
                            <Settings token={token} callback={updateUsers}/>
                        </TabPane>
                    </TabPaneGroup>
                </div>
            </div>
        </div>
    );
}

export default ManagementStaffDashboard;