import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.modal';

export const ADD_RECIPE = "ADD_RECIPE";

export class AddRecipe implements Action {
    readonly type: string = ADD_RECIPE;
    payload: Recipe;
}