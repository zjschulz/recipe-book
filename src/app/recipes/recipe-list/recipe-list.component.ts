import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cupcake', 'Test Description', 'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
