import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMouvementsComponent } from './components/list-mouvements/list-mouvements.component';
import { MouvementsRoutingModule } from './mouvements-routing.module';



@NgModule({
  declarations: [
    ListMouvementsComponent
  ],
  imports: [
    CommonModule,
    MouvementsRoutingModule,
  ]
})
export class MouvementsModule { }
