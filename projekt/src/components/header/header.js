import React, { Component } from 'react';
import Logo from './logo.svg'
import search from './search.svg'
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <header className="header">
                
                <div id="img">
                    <img src={Logo} alt="" className="logo"/>
                </div>
                <nav className="nav">
                
                    <ul>
                  <li className="dropdown"><Link to="/">lange Kurser</Link>
                  <div className="dropdown-content">
                    <Link to="/priser">Priser og tilskud </Link>
                    <Link to="/linjefag">Linjefag</Link>
                  </div>
                  </li>
                  
                        <li><Link to="/kortekurser">Korte kurser</Link></li>
                        <li><Link to="/Studieture">Studieture</Link></li>
                        <li><Link to="/Kursuscenter">Kursuscenter</Link></li>
                        <li><Link to="/omskolen">om skolen</Link></li>
                    </ul>
                </nav>
                <div id="search">
                    <img src={search} alt="" />
                </div>
            </header>
        );
    }
}

export default Header;