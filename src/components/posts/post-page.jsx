import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShowPostModal} from '../../redux/posts/post-selector';
import {showPostModal, resetState} from "../../redux/action.js"

import PostItem from './post-list.jsx';
import Modal from "../common-components/modal.jsx";

import CustomButton from '../common-components/custom-button.jsx';


class PostPage extends Component {
    componentDidMount() {
        const {resetState} = this.props;
    
        resetState();
    
      }
    render() {
        const {isShowPostModal,showPostModal} = this.props;
        
        return (
            <>
                <div className="post-list-container">
                    <PostItem />
                    <CustomButton className="custom-button" value = {"Add Post"} OnClick= {() => showPostModal()}/>
                </div>
                {showPostModal}
               <Modal show= {isShowPostModal} onClose={() => showPostModal()}/>
         </>
        )
    }
  
}

const mapDispatchToProps = dispatch => ({
    showPostModal: () => dispatch(showPostModal()),
    resetState: () => dispatch(resetState()),
  })
  
const mapStateToProps = () => createStructuredSelector({
    isShowPostModal : selectShowPostModal
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)