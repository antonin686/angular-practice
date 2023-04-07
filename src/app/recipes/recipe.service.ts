import { Recipe } from './recipe.modal';

class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://picsum.photos/id/1/200/300'
    ),
  ];

  getRecipe() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }
}

export { RecipeService };
