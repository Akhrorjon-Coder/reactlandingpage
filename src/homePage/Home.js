import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import iphoneImg from '../images/iphones.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='main'>
                <div className='side1'>
                    <h3>
                        GET THE NEW IPHONE 12 PRO
                    </h3>
                    <p>
                    A transformative triple‑camera system that adds tons of capability without complexity
                    </p>
                    <div className='buttons'>
                        <a href='#' className='button'>
                            Buy Now <ShoppingBasketIcon className='aaa'/>
                        </a>
                        <a href='#' className='button'>
                            With %599 with trade-in
                        </a>
                    </div>
                </div>
                <div className='side2'>
                    <img src={iphoneImg} alt='iphone img'/>
                </div>
            </div>
        </div>
    );
};


export default Home;