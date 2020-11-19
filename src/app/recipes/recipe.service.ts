import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Cupcake 1',
    //         'Test Description 1',
    //         'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png',
    //         [
    //             new Ingredient('flour', 2),
    //             new Ingredient('sugar', 3)
    //         ]),
    //         new Recipe(
    //             'Cupcake 2',
    //             'Test Description 2',
    //             'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png',
    //             [
    //                 new Ingredient('flour', 2),
    //                 new Ingredient('sugar', 3)
    //             ]), 
    //   ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}
    
    setRecipes(recipes: Recipe[]) {
        debugger;
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}