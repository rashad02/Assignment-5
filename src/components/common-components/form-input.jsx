import React from 'react';

import "./form-input.scss";

const FormInput = ({handleChange,handleClick, label,type,value, ...otherProps}) => {

    return (
        <div className="group">
             {
                label ? (<label className ={`form-input-label`}>{label}
                </label>) : null
                }
                {<div><input type={type} className="form-input" value={value} onChange={handleChange} {...otherProps} />
               </div>}
            
        </div>
    )
}

export default FormInput;