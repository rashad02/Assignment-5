import React from 'react';

import './custom-button.scss';

const CustomButton = ({value, OnClick}) => {
    return (
        <div className="post-button">
            <input type= "button" onClick = {OnClick}  value= {value}className="btn btn-black" />
               
           
        </div>
    )
}

export default CustomButton;