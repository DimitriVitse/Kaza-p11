import React from 'react';
import { NavLink } from "react-router-dom";

import LogoHeader from '@/Assets/Images/logo/Logo.png';


const Header = () => {

    return (
        <header>
            <img src={LogoHeader} alt="Logo Header Kasa" />
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/apropos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
        </header>
    );

};

export default Header