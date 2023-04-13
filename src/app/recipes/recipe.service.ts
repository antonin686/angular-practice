import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { HttpClient } from '@angular/common/http';

@Injectable()
class RecipeService {
  private recipes: any = [];

  constructor(private http: HttpClient) {}

  getRecipe() {
    return this.recipes;
  }

  // fetchRecipe() {
  //   this.http.get('http://localhost:3000/recipes').subscribe((res: any) => {
  //     res.forEach((recipe) => {
  //       this.addRecipeToState(recipe);
  //     });
  //   });
  // }

  fetchRecipe() {
    return this.http.get('http://localhost:3000/recipes');
  }

  addRecipeToState(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  addRecipe(recipe: Recipe){
    this.http.post('http://localhost:3000/recipes', recipe).subscribe((res: any) => {
      console.log(res);
      this.addRecipeToState(recipe);
    })
  }
}

export { RecipeService };
