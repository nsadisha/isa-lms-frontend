function Alert({message, varient='primary'}) {
    return (
        <div className={"alert alert-"+varient+" alert-dismissible"} role="alert">
            <div>{message}</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    );
}

export default Alert;