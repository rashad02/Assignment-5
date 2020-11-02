import {ActionTypes} from './action-types';


export const addPost = post => {
    const action = {
        type: ActionTypes.ADD_POST,
        payload: post
    }

    return action;
}

export const editPost = (postId, post) => {
    const action = {
        type: ActionTypes.ADD_POST,
        postId: postId,
        payload: post
    }

    return action;
}

export const addCategory = category => {
    const action = {
        type: ActionTypes.ADD_CATEGORY,
        payload: category
    }

    return action;
}

export const showPostModal = post => {
    const action = {
        type: ActionTypes.SHOW_POST_MODAL,
        payload: post
    }

    return action;
}

export const showCategoryDropdown = () => {
    const action = {
        type: ActionTypes.SHOW_CATEGORY_DROPDOWN
    }

    return action;
}

export const showCategoryModal = category => {
    const action = {
        type: ActionTypes.SHOW_CATEGORY_MODAL,
        payload: category
    }

    return action;
}


export const resetState = () => {
    const action = {
        type: ActionTypes.RESET_STATE,
    }

    return action;
}





