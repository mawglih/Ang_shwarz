import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingService {
    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
      ];
    getIngredient() {
        return this.ingredients.slice();
    }
    getIngredientAdded(ingredient: Ingredient) {
        
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(... ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}