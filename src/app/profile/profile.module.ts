import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
