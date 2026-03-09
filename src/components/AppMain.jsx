import comics from './comics'
export default function AppMain() {

    return (
        <main>
            {comics.map((comic) => (
                <div key={comic.id}>{comic.title}</div>
            ))}
        </main>
    );
}