import React from 'react';
import '@styles/Navbar.scss'
import { useNavigate } from 'react-router-dom';
import logoExtended from '@icons/aippiaLogoExtended.svg';
import logoReduced from '@icons/aippiaLogoReduced.svg';

const page = '/comments'

const Navbar = () => {
    let navigate = useNavigate();
    function handleClick() {
    navigate(page);
  }
    return(
        
    <div id="navbar-container">
        <img src={logoReduced} alt="Logo" id = "navbar-logo-mobile"/>
        <img src={logoExtended}  alt="Logo" id = "navbar-logo"/>
        <button id = "navbar-cta" onClick={handleClick}> Compra Ya</button>
    </div>
    );
}

export default Navbar;