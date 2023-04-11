import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css'],
})
export class AddRecipeDialogComponent implements OnInit {
  addRecipeForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    });

    this.addRecipeForm.statusChanges.subscribe((value) => console.log(value))
  }

  onSubmit() {
    if (this.addRecipeForm.valid) {
      const recipe: Recipe = this.addRecipeForm.value;

      this.recipeService.addRecipe(recipe);
      this.dialog.closeAll()
    }
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      const recipes = this.recipeService.getRecipe();
      let found: boolean = false;
      recipes.forEach((recipe) => {
        if (recipe.name == control.value) {
          found = true;
        }
      });
      if(found) resolve({'nameIsForbidden': true})
      else resolve(null);
    });

    return promise;
  }
  newRecipeHandler() {
    // this.recipeService.addRecipe(new Recipe(this.name, this.desc, this.image));
  }
}
