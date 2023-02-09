import EmptyState from "../EmptyState";

function AnnonymousHome() {
    return ( 
        <div className="container">
            <div className="row justify-content-center py-3">
                <div className="col-md-6">
                    <EmptyState message='No content here!' />
                </div>
            </div>
        </div>
     );
}

export default AnnonymousHome;