import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Cupcake',
            'Test Description',
            'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png',
            [
                new Ingredient('flour', 2),
                new Ingredient('sugar', 3)
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}