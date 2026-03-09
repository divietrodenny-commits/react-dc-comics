import comics from './comics'
export default function AppMain() {

    return (
        <main>
            <section className="hero">
                <img src="/img/jumbotron.jpg" alt="" />
            </section>

            <h2>CURRENT SERIES</h2>

            {comics.map((comic) => (
                <div key={comic.id}>{comic.title}</div>
            ))}
            <button className="load_more">LOAD MORE</button>
        </main>
    );
}