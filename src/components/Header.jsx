import { Link } from 'react-router-dom';
import "../css/Header.css";

const Header = () => {
    return (
        <header className="header container">
            <h1 className="site-title">Personal Blog</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;