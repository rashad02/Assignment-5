import {ActionTypes} from '../action-types';


const category = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATEGORY:
              return  [ ...state,
                action.payload    
            ];
        case ActionTypes.SHOW_CATEGORY_DROPDOWN:
              return {
                showCategoryDropdown: !state.showCategoryDropdown
              }

        case ActionTypes.SHOW_CATEGORY_MODAL:
          return { showCategoryModal: !state.showCategoryModal}
        default:
          return state
      }
  }
  
  export default category;
