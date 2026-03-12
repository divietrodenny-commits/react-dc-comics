export default function comicCard({ thumb, title, series, price }) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={thumb} alt={title} className="card-img-top" />

                <div className="card-body">
                    <h6 className="text-uppercase text-muted small mb-1">
                        {series}
                    </h6>
                    <p className="card-title small mb-2"> {title}</p>
                </div>

                <div className="card-footer border-0 bg-transparent">
                    <span className="fw-bold">{price}</span>
                </div>
            </div>
        </div>
    );
}
