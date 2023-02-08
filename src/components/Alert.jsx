import localStorageService from "../service/LocalStorageService";

function Alert({message, varient='primary'}) {
    function handleAlertClose() {
        localStorageService.setIsFirstTime(false);
    }

    return (
        <div className={"alert alert-"+varient+" alert-dismissible"} role="alert">
            <div>{message}</div>
            <button 
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleAlertClose}></button>
        </div>

    );
}

export default Alert;