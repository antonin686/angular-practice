import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    private store: Store<{ recipeStore: Recipe[] }>
  ) {}

  ngOnInit(): void {
    this.recipes = this.store.select('recipeStore');

    this.recipeService.fetchRecipe().subscribe((res) => {
    });
    this.recipes = this.recipeService.getRecipe();
  }
}
