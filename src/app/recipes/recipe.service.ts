import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
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

    constructor(private slService: ShoppingListService)
      
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}