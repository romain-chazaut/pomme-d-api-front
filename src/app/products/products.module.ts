import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { FavoritesModalComponent } from './favorites-modal/favorites-modal.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductModalComponent,
    EditProductModalComponent,
    FavoritesModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
