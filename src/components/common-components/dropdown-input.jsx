import React, { Component } from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { showCategoryModal} from '../../redux/action';
import {selectShowCategoryModal} from '../../redux/category/category-selector';
import Modal from '../common-components/modal.jsx';

import './dropdown-input.scss';
import "./form-input.scss";

class Dropdown extends Component{

    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    handleSelect = (id, name) => {
       
        const  {showCategoryModal} = this.props;
        console.log("id: ", id)

        if(id ==='create-category') {

            showCategoryModal();
          
        } else {
        
        }
    }

    handleClose = () => {
      
    }
    
    render(){
       const  { items,categoryModal,onItemSelect} = this.props;
       return (
            <div className="group">
                <div className="dropdown-element">
                    <input type="button" className="buttons" value={"Create New"} onClick={() => this.handleSelect('create-category')} />
                    {items ? items.map(({id, name,...otherProps}) => (
                        <div onClick={()=>onItemSelect(id,name)}>{name}</div>
                        )) : null}                                 
                    </div>
                    <Modal show={categoryModal}
                            onClose={this.handleClose} type={"category"}>
                            Here's some content for the modal
                    </Modal> 
            </div>
        );
    }  
};

  

  const mapDispatchToProps = dispatch => ({
    showCategoryModal: () => dispatch(showCategoryModal())
  })
  
const mapStateToProps = () => createStructuredSelector({
    isShowCategoryModal: selectShowCategoryModal
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
// export default Dropdown;