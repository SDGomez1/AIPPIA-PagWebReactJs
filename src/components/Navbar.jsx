import React from 'react';
import '@styles/Navbar.scss'
import { useNavigate } from 'react-router-dom';
import logoExtended from '@icons/aippiaLogoExtended.svg';
import logoReduced from '@icons/aippiaLogoReduced.svg';
import cartLogo from '@icons/cartLogo.svg'



const comments = '/comments'
const home = '/'
const text_input = [ 'Compra Ya']

const Navbar = () => {
    let navigate = useNavigate();
    function handleClickComments() {
    navigate(comments);
  }
    function handleClickHome() {
      navigate(home)
    }
  

    return(
        
    <div id="navbar-container">
        <img src={logoExtended} alt="Logo" id = "navbar-logo-mobile"/>
        <img src={logoExtended}  alt="Logo" id = "navbar-logo" onClick={handleClickHome}/>
        <button id = "navbar-cta" onClick={handleClickComments}> {text_input[0]}</button>
        <img src={cartLogo} alt="cart" onClick={handleClickComments} id = "cartLogo"/>
    </div>
    );
}

export default Navbar;