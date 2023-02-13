function Card({ header, body, description }) {
    return (
        <div className="card mb-3">
            <h5 className="card-header">{header}</h5>
            <div className="card-body">
                <h5 className="card-title text-secondary">{body}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Card;