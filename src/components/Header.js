import React from 'react';
import './css/Header.css';
import Logo from '../robinhood.svg';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">

            <div className="header_logo">
                <img src={Logo} width={25} alt="logo" />
                <h2>Robinhood</h2>
            </div>

            <div className="header_search">

                <div className="header_search_container">
                    <SearchIcon id="searchLogo" />
                    <input type="text" placeholder="Search"/>
                </div>
            
            </div>

            <div className="header_menu">
                {/* <MenuIcon /> */}
                <a href="/" className="link">Home</a>
                <a href="/" className="link">Notifications</a>
                <a href="/" className="link">Account</a>
            </div>
            
        </div>
    )
}

export default Header;
