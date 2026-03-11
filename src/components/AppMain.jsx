import comics from './comics';
import ComicCard from './AppComicsCard';

export default function AppMain() {
function loadMore() {
    alert('Caricamento in corso')
}

    return (
        <main>
            <section className="hero">
                <img src="/img/jumbotron.jpg" alt="DC heroes" />
            </section>

            <section className="comics-section py-5 bg-dark">
                <div className="container">
                    <h2 className="text-uppercase text-white bg-primary px-3 py-2 d-inline-block">
                        Current Seriers
                    </h2>

                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 mt-3">
                        {comics.map((comic) => (
                            <ComicCard
                                key={comic.id}
                                thumb={comic.thumb}
                                title={comic.title}
                                series={comic.series}
                                price={comic.price}
                            />
                        ))}
                    </div>

                    <div className="text-center my-4">
                        <button className="btn btn-primary text-uppercase small" onClick={loadMore}>
                            LOAD MORE
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
