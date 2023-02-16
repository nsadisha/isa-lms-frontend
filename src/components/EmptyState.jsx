import emptyIcon from "../assets/img/empty.svg";

function EmptyState({ message }) {
    return (
        <div className="bg-light d-grid justify-content-center py-5 my-4" style={{ borderRadius: '15px' }}>
            <img src={emptyIcon} alt="Empty icon" className="mx-auto" />
            <h5 className="text-secondary text-center mt-3">{message}</h5>
        </div>
    );
}

export default EmptyState;