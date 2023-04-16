import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';
import { Store } from '@ngrx/store';
import { TYPES } from '../../store/recipe.actions';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private store: Store<Recipe[]>
  ) {}

  ngOnInit(): void {}

  deleteHandler(recipe: Recipe) {
    this.recipeService.delete(recipe).subscribe((res: any) => {
      this.store.dispatch({ type: TYPES.DELETE_RECIPE, payload: recipe });
    });
  }
}
