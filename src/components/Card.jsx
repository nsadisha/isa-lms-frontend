function Card({ header, body, description, icon }) {
    return (
        <div className="card mb-3">
            <div className="header d-flex w-100">
                <img src={icon} alt="Icon" />
                <span className="card-header">{header}</span>
            </div>
            <div className="card-body">
                <p className="card-title">{body}</p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Card;