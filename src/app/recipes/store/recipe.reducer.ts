import { Recipe } from "../recipe.modal";
import { ADD_RECIPE, AddRecipe } from "./recipe.actions";

const initialState = [
    new Recipe("Test 2", 'Simple Test', 'https://picsum.photos/id/1/200/300')
]

export function recipeReducer(state: any = initialState, action: AddRecipe) {
    switch (action.type) {
        case ADD_RECIPE:
            return [...state, action.payload];
        default:
            return state;
    }
}