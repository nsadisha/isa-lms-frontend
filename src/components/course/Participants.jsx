import EmptyState from "../EmptyState";

function Participants({ participants }) {

    return (
        <div className="row justify-content-center mt-3">
            {participants.length === 0 && <div className="col-md-8">
                <EmptyState message="No students have enrolled in this course!" />
            </div>}

            {participants.length > 0 && <div className="col-md-12">
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
                        {participants.map(user => {
                            return (
                                <tr key={user.email}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.first_name + " " + user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}
        </div>
    );
}

export default Participants;