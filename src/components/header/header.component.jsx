import React from 'react';
import {Link} from "react-router-dom";

import './header.styles.scss';

const Header = ({currentUser, hidden, setCurrentuser, userType}) => {
    
    return (
        <div className="header">
            <div className="options">
                <Link to="/home" className="option">Home</Link>
                <Link to="/post" className="option">Post</Link>
                <Link to="/category" className="option">Category</Link>
            </div>
        </div>
    )
}


export default Header;