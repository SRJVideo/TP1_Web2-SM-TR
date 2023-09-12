import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about/">Carousel</NavLink></li>
                    <li><NavLink to="/contact/">Tableau</NavLink></li>
                    <li><NavLink to="/contact/">Calendrier</NavLink></li>
                    <li><NavLink to="/contact/">Convertisseur</NavLink></li>
                    <li><NavLink to="/contact/">Crypto</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;