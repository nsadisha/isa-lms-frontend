function Toast({title, message, time, show, onDismissed}) {
    const isDisplaying = show==="true" ? "show" : ""
    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className={"toast fade " + isDisplaying} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {/* <img src="..." className="rounded me-2 bg-success" alt="..." /> */}
                        <strong className="me-auto">{title}</strong>
                        <small>{time}</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={onDismissed}></button>
                </div>
                <div className="toast-body">{message}</div>
            </div>
        </div>
    );
}

export default Toast;