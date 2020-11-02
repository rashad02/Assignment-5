import {combineReducers} from 'redux';

import posts from './posts/post-reducer.js';
import category from './category/category-reducer.js';


const rootReducer = combineReducers({
    posts,
    category
});


export default  rootReducer;