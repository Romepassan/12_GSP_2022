import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 
    './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'products', pathMatch: 'full'

  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule)
  },

  {
    path: 'mouvements',
    loadChildren: () => import('./mouvements/mouvements.module')
      .then(m => m.MouvementsModule)
  },

  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  },
  { 
    path: '**', pathMatch: 'full', component: PagenotfoundComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
