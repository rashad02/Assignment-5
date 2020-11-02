import React from 'react';

import CustomButton from '../common-components/custom-button.jsx';
import './post.scss'


const PostItem = () => {

    return (
        <div className="post-list-header">
                <div className="post-wrapper">
                    <div className="post-image">
                        <img src="face-image.jpg" alt="Mobirise" title="" media-simple="true" height="250" weight="250"/>
                    </div>
                    <div className="post-content">
                        <h4 className="post-caption"><strong>
                            There are Only 2 Types of Cats</strong></h4>
                        <p className="post-text">
                            Magazine for children. Learning in a game form through diving into the world of amazing discoveries. </p>
                    </div>
                    <CustomButton value={"Edit Post"}/>
                </div>
            </div>   
    )
}


export default PostItem;