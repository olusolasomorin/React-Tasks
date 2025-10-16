function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="social-links">
                <a href="https://x.com/only1_sola" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/olusola-somorin/" target="_blank">Linkedln</a>
                <a href="https://github.com/olusolasomorin" target="_blank">GitHub</a>
            </div>
            <p>© {year} Naija Tech Hub. All rights reserved.</p>
        </footer>
    );
}

export default Footer;