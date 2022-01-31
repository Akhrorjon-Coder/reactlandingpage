import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const CategoriesSec = () => {

    return (
        <div className="categories">
            <ul className="links">
                <li className="link_item">
                    <a href="#" className="link active">
                        Home
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        New arrivals
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Trending
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Deals for you
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Discounts
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Weekly offers
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Become a ventor
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesSec;