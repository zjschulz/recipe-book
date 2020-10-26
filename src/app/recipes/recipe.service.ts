import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Cupcake', 'Test Description', 'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png'),
        new Recipe('Cupcake', 'Test Description', 'https://www.fotolip.com/wp-content/uploads/2016/05/Cupcakes-Clipart-5.png')
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}