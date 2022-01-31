import React from 'react';
import navLogo from '../images/logo.png'
import like from '../images/like.png'
import user from '../images/user.png'
import shopping from '../images/shopping.png'
import SearchIcon from '@mui/icons-material/Search';
const Nav = () => {
    return (
        <>
            <nav className='navigation'>
                <a href='#' className='nav-logo'>
                    <img src={navLogo} alt='Navbar Logo'/>
                </a>
                <div className='searchSec'>
                    <form>
                        <input type='text' className='searchInput' placeholder='Search For Products,Brands & Categories'/>
                        <button className='searchBtn' type='button'>
                            <SearchIcon/>
                        </button>
                    </form>
                </div>
                <div className='icons'>
                    <a href='#' className='bolimlar'>
                        <img src={like} alt='like png'/>
                    </a>
                    <a href='#' className='bolimlar'>
                        <img src={user} alt='user png'/>
                    </a>
                    <a href='#' className='bolimlar'>
                        <img src={shopping} alt='shopping png'/>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;