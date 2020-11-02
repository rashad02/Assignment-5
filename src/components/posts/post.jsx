import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {showCategoryDropdown, showPostModal, showCategoryModal} from '../../redux/action';
import {selectShowCategoryDropdown, selectShowCategoryModal} from '../../redux/category/category-selector'

import FormInput from '../common-components/form-input.jsx';
import Dropdown from '../common-components/dropdown-input.jsx';

import Modal from '../common-components/modal.jsx';

import './post.scss'

class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description : '',
            productBrand: "Select Brand"
        }
    }

    handleChange = () => {
        const {showCategoryDropdown} = this.props;

        showCategoryDropdown();
    }

    handleClose = () => {
        const {showPostModal} = this.props;

        showPostModal();
    }

    onItemSelect = (id, name) => {
    
        if(id ==='create-category') {
            const {showCategoryModal} = this.props;

            showCategoryModal();
            
        } else {
           
        }
       
    }

    render() {

        const {type, isShowCategoryDropdown,showCategoryDropdown, isShowCategoryModal} = this.props;
        const {name,description,productBrand, items} = this.state;

        return (
            <div className="post-container">
                    <div className="post-header">{type === "category" ? "Add New Category" : "Add New Product"}</div>
                    <FormInput type="text" value={name} label={"Name"} onChange={this.handleChange} />
                 <FormInput type="dropdown" value={productBrand} label={"Product Brand"} placeholder= {"placeholder"} onClick={() => showCategoryDropdown()} />
                    {isShowCategoryDropdown ? <Dropdown onItemSelect={() => this.onItemSelect()} categoryModal={isShowCategoryModal} placeholder="Product Brand"items={items} /> : ""} 
                  <FormInput type="text" value={description} label={"Description"} onClick={this.handleChange} onChange={() => this.handleChange} row={3} />
                    <div className="save-button"><input type="button" className="buttons" value={"Save"} onClick={this.handleClick} />
                    <input type="button" className="buttons cancel-buttons" value={"Close"} onClick={this.handleClose} /></div>
                    <Modal show={isShowCategoryModal}
                            onClose={this.OnClick} type={"category"}>
                            Here's some content for the modal
                    </Modal>
            </div>
        )
    }
    
}


const mapDispatchToProps = dispatch => ({
    showCategoryDropdown: () => dispatch(showCategoryDropdown()),
    showCategoryModal: () => dispatch(showCategoryModal()),
    showPostModal: () => dispatch(showPostModal()),
  })
  
const mapStateToProps = () => createStructuredSelector({
    isShowCategoryDropdown : selectShowCategoryDropdown,
    isShowCategoryModal: selectShowCategoryModal,
})
  

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);