export default function AppFooter() {
    const barBlue = [
        { id: 1, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics'},
        { id: 2, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics' },
        { id: 3, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics' },
        { id: 4, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics' },
        { id: 5, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics' },
    ];

    return (
        <section className="bar_section">
            <div className="bar_container">
                {barBlue.map((bar) => (
                    <div key={bar.id} className="strip_bar">
                        <img src={bar.icon} alt={bar.label} />
                        <span>{bar.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}