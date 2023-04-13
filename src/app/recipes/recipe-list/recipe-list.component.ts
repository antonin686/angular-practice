import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Observable<Recipe[]>;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AddRecipeDialogComponent);
  }

  newRecipeHandler() {
    this.openDialog();
  }
}
