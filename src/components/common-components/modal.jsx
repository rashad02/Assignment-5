import React from 'react';

import PostContainer from "../posts/post.jsx";
import AddCategory from "../category/add-category.jsx";

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }


    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {
            this.props.type !== 'category' ?  <PostContainer type = {this.props.type} /> : <AddCategory />
          }
           
        </div>
      </div>
    );
  }
}

export default Modal;