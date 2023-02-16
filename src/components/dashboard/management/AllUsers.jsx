import localStorageService from "../../../service/LocalStorageService";

function AllUsers({ users }) {
    const email = localStorageService.getEmail()
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.email}>
                            <th scope="row">{user.id}</th>
                            <td>{user.first_name + " " + user.last_name} {email === user.email && "(You)"}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default AllUsers;