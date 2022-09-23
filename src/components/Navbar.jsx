import React from 'react';
import '@styles/Navbar.scss'

import logoExtended from '@icons/aippiaLogoExtended.svg';
import logoReduced from '@icons/aippiaLogoReduced.svg';


const Navbar = () => {
    return(
        
    <div id="navbar-container">
        <img src={logoReduced} alt="Logo" id = "navbar-logo-mobile"/>
        <img src={logoExtended}  alt="Logo" id = "navbar-logo"/>
        <button id = "navbar-cta"> Compra Ya</button>
    </div>
    );
}

export default Navbar;