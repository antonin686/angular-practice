import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TYPES } from './store/recipe.actions';

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
    this.recipeService.fetch().subscribe((res: any) => {
      if (res.length > 0) {
        this.store.dispatch({
          type: TYPES.SET_RECIPE,
          payload: res,
        });
      }
    });

    this.recipes = this.store.select('recipeStore');
  }
}
