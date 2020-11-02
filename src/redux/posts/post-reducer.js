import {ActionTypes} from '../action-types';


const posts = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
          return [ ...state,
            action.payload    
        ];
        case ActionTypes.EDIT_POST:
            return state.map(post =>
                (post.id === action.postId ?
                  Object.assign({}, post, action.payload) :
                  post)
              );
        case ActionTypes.SHOW_POST_MODAL:
          return {
              showPostModal: !state.showPostModal
          }
          case ActionTypes.RESET_STATE: 
          return []
        default:
          return state
      }
  }
  
  export default posts;
