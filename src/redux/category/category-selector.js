import { createSelector} from 'reselect';

const selectCategory = state => state.category;

export const selectShowCategoryDropdown = createSelector(
    [selectCategory],  category => category.showCategoryDropdown 
);

export const selectShowCategoryModal = createSelector(
    [selectCategory],  category => category.showCategoryModal
);
