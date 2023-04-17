import { Action as Ac } from '@ngrx/store';
import { Recipe } from '../recipe.modal';

export const TYPES = {
    ADD_RECIPE: "ADD_RECIPE",
    SET_RECIPE: "SET_RECIPE",
    DELETE_RECIPE: "DELETE_RECIPE",
};

export default class Action implements Ac {
    type: string;
    payload: Recipe;
}