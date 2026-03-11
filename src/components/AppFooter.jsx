export default function AppFooter() {
    const barBlue = [
        { id: 1, icon: './img/buy-comics-digital-comics.png', label: 'Digital Comics' },
        { id: 2, icon: './img/buy-comics-merchandise.png', label: 'DC Merchandise' },
        { id: 3, icon: './img/buy-comics-subscriptions.png', label: 'Subscription' },
        { id: 4, icon: './img/buy-comics-shop-locator.png', label: 'Comic Shop Locator' },
        { id: 5, icon: './img/buy-dc-power-visa.svg', label: 'DC Power Visa' },
    ];

    const linksFooter = [
        {
            id: 1,
            title: 'Dc comics',
            links: ['Characters', 'Comics', 'Movies', 'Tv', 'Games', 'Videos', 'News'],
        },
        {
            id: 2,
            title: 'Dc',
            links: [
                'Terms Of Use',
                'Privacy police (New)',
                'Ad Choices',
                'Advertising',
                'Jobs',
                'Subscription',
                'Talent Workdshops',
                'CPSC Certtificates',
                'Ratings',
                'Shop Help',
                'Contact Us',
            ],
        },
        {
            id: 3,
            title: 'Sites',
            links: ['DC', 'MAD Megazine', 'DC Kids', 'DC Universe', 'Dc Power Visa'],
        },
        {
            id: 4,
            title: 'Shop',
            links: ['Shop DC', 'Shop DC Collectibles'],
        },
    ];

    return (
        <>
            <section className="bg-primary text-white py-4">
                <div className="container">
                    <div className="row justify-content-between">
                        {barBlue.map((bar) => (
                            <div key={bar.id} className="col-6 col-md d-flex align-items-center mb-3">
                                <img src={bar.icon} alt={bar.label} className="me-4" style={{ height: '40px' }} />
                                <span className="text-uppercase fw-semibold small">{bar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="footer-middle">
                    <div className="container d-flex justify-content-between">
                        <div className="footer-links d-flex">
                            {linksFooter.map((group) => (
                                <div key={group.id} className="footer-column me-4">
                                    <h4 className="text-uppercase mb-4">{group.title}</h4>
                                    <ul className="list-unstyled">
                                        {group.links.map((link, index) => (
                                            <li key={index}>{link}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="footer_logo ms-auto">
                            <img src="./img/dc-logo-bg.png" alt="DC big logo" />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-3">
                    <div className="container d-flex justify-content-between align-items-center">
                        <button className="btn btn-outline-primary text-uppercase fw-semibold">
                            Sign-up now!
                        </button>

                        <div className="d-flex align-items-center gap-3">
                            <span className="text-uppercase fw-semibold text-primary">
                                Follow us
                            </span>

                            <div className="d-flex align-items-center gap-2">
                                <a href="#">
                                    <img src="./img/footer-facebook.png" alt="Facebook" />
                                </a>
                                <a href="#">
                                    <img src="./img/footer-twitter.png" alt="Twitter" />
                                </a>
                                <a href="#">
                                    <img src="./img/footer-youtube.png" alt="YouTube" />
                                </a>
                                <a href="#">
                                    <img src="./img/footer-pinterest.png" alt="Pinterest" />
                                </a>
                                <a href="#">
                                    <img src="./img/footer-periscope.png" alt="Periscope" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}
