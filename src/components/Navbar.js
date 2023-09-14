import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Accueil</NavLink></li>
                <li><NavLink to="/about/">Carousel</NavLink></li>
                <li><NavLink to="/tableau/">Tableau</NavLink></li>
                <li><NavLink to="/calendrier/">Calendrier</NavLink></li>
                <li><NavLink to="/convertisseur/">Convertisseur</NavLink></li>
                <li><NavLink to="/crypto/">Crypto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;