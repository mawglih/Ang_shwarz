import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Shnitzel', 'Awesome shnitzel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/320px-Schnitzel.JPG',
        [
            new Ingredient('Meat', 1), 
            new Ingredient('Fries', 20)
        ]),
        new Recipe('Big Burger', 'Fat Burger', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/320px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', 
        [
            new Ingredient('Meat', 1), 
            new Ingredient('Bread', 1)
        ]),
        new Recipe('Sushi Maki', 'Beautiful roll', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Golden_Maki_Vegetarian_Dragon_sushi_roll.jpg/320px-Golden_Maki_Vegetarian_Dragon_sushi_roll.jpg', 
        [
            new Ingredient('Fish', 1), 
            new Ingredient('Rice', 25),
            new Ingredient('Mango', 1)
        ]),
        ];
    constructor(private shSrv: ShoppingService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addToShopping(ingredients: Ingredient[]) {
        this.shSrv.addIngredients(ingredients);
    }
    
}