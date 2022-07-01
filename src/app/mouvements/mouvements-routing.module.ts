import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMouvementsComponent } from './components/list-mouvements/list-mouvements.component';


const routes: Routes = [
  {
    path: '', component: ListMouvementsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MouvementsRoutingModule { }
