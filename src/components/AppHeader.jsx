export default function AppHeader() {
    const navLinks = [
        { id: 1, label: 'Characters', href: '#' },
        { id: 2, label: 'Comics', href: '#' },
        { id: 3, label: 'Movies', href: '#' },
        { id: 4, label: 'Tv', href: '#' },
        { id: 5, label: 'Games', href: '#' },
        { id: 6, label: 'Collectibles', href: '#' },
        { id: 7, label: 'Videos', href: '#' },
        { id: 8, label: 'Fans', href: '#' },
        { id: 9, label: 'News', href: '#' },
        { id: 10, label: 'Shop', href: '#' },
    ];

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <img src="/img/dc-logo.png" alt="DC logo" />

                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}