import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { HttpClient } from '@angular/common/http';

@Injectable()
class RecipeService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get('http://localhost:3000/recipes');
  }

  add(recipe: Recipe){
    return this.http.post('http://localhost:3000/recipes', recipe);
  }

  delete(recipe: Recipe){
    return this.http.delete(`http://localhost:3000/recipes/${recipe.id}`);
  }
}

export { RecipeService };
