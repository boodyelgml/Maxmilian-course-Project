import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { StartRecipeComponent } from './recipes/start-recipe/start-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: StartRecipeComponent },
      { path: 'new', component: EditRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class appRouting {

}