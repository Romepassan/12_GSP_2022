import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    ListProductsComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,





  ],
  exports: [

  ]
})
export class ProductsModule { }
