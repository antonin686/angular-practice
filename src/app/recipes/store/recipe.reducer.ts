import { Recipe } from '../recipe.modal';
import RecipeAction, { TYPES } from './recipe.actions';

const initialState = [];

export function recipeReducer(state: any = initialState, action: RecipeAction) {
  switch (action.type) {
    case TYPES.SET_RECIPE:
      return action.payload;
    case TYPES.ADD_RECIPE:
      return [...state, action.payload];
    case TYPES.DELETE_RECIPE:
      return state.filter((el: Recipe) => el.id != action.payload.id);
    default:
      return state;
  }
}
