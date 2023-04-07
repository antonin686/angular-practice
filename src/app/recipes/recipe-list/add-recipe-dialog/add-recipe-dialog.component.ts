import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css'],
})
export class AddRecipeDialogComponent implements OnInit {
  name: string = '';
  desc: string = '';
  image: string = '';

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  newRecipeHandler() {
    this.recipeService.addRecipe(new Recipe(this.name, this.desc, this.image));
  }
}
