import { createSelector} from 'reselect';

const selectPost = state => state.posts;

export const selectShowPostModal = createSelector(
    [selectPost],  post =>  post.showPostModal 
);

