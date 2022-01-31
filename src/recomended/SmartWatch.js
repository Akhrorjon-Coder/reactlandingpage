import React from 'react';
import SmartWatchs from '../JSON/watch.json'
const SmartWatch = () => {
    return (
        <div className='recomended'>
            <div className='title'>
                <p>EXPLORE AWESOME PRODUCTS</p>
                <h3>RECOMMENDED FOR YOU</h3>
            </div>   
            <div className='cards'>
                {
                    SmartWatchs.map((post)=>{
                        return(
                            <div className='productCard'>
                                <img src={post.img}/>
                                <p>{post.name}</p>
                                <div className='price'>
                                    {post.price}
                                </div>
                            </div>
                        )
                    })
                }
            </div>         
            <span className='recomendedBtn'>
                <a href='#' className='expBtn'>
                    Explore Other Products
                </a>
            </span>
        </div>
    );
};

export default SmartWatch;