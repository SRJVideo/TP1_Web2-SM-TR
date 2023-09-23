import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Accueil</NavLink></li>
                <li><NavLink to="/carousel">Carousel</NavLink></li>
                <li><NavLink to="/tableau">Tableau</NavLink></li>
                <li><NavLink to="/calendrier">Calendrier</NavLink></li>
                <li><NavLink to="/convertisseur">Convertisseur</NavLink></li>
                <li><NavLink to="/crypto">Crypto</NavLink></li>
                <li><NavLink to="/fibonacci">Fibonacci</NavLink></li>
                <li><NavLink to="/fibonacciww">Fibonacci Web Worker</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;