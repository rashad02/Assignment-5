import React from 'react';
import {connect} from 'react-redux';

import { showCategoryModal} from '../../redux/action';

import FormInput from '../common-components/form-input.jsx';

import '../posts/post.scss';

const AddCategory =({name,description, showCategoryModal}) => {

    const handleChange = () => {

    }

    const handleClick = () => {

    }

    const handleClose = () => {
        showCategoryModal();
    }
    return (
            <div className="post-container">
                <div className="post-header">Add New Category</div>
                <FormInput type="text" value={name} label={"Name"} onChange={handleChange} />
                <FormInput type="text" value={description} label={"Description"} onClick={handleChange} row={3} />
                <div className="save-button"><input type="button" className="buttons" value={"Save"} onClick={handleClick} />
                <input type="button" className="buttons cancel-buttons" value={"Close"} onClick={handleClose} /></div>
            </div>
    )
}


const mapDispatchToProps = dispatch => ({
    showCategoryModal: () => dispatch(showCategoryModal())
  })
  

export default connect(null, mapDispatchToProps)(AddCategory);