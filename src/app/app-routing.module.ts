import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'make-trip',
    loadChildren: () => import('./make-trip/make-trip.module').then( m => m.MakeTripPageModule)
  },
  {
    path: 'edit-trip/:id',
    loadChildren: () => import('./edit-trip/edit-trip.module').then( m => m.EditTripPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
