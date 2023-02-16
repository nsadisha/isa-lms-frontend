import { useState } from "react";
import localStorageService from "../service/LocalStorageService";

function Alert({ message, varient = 'primary' }) {
    const [styles, setStyles] = useState({
        position: 'absolute',
        transform: 'translateX(-50%)',
        left: '50%',
        top: '15%'
    });

    function handleAlertClose() {
        setStyles({ ...styles, display: 'none' })
        localStorageService.setIsFirstTime(false);
    }

    return (
        <div className={"alert alert-" + varient + " alert-dismissible"} style={styles}>
            <div className="me-3">{message}</div>
            <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="alert"
                // aria-label="Close"
                onClick={handleAlertClose}></button>
        </div>

    );
}

export default Alert;