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
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container d-flex align-items-center">
                    <a href="#" className="navbar-brand m-0">
                        <img src="/img/dc-logo.png" alt="DC logo" />
                    </a>

                    <ul className="navbar-nav ms-auto gap-3">
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav-item">
                                <a href={link.href}
                                    className="nav-link text-uppercase fw-bold small">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
