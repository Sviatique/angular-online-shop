import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";

import {CatalogComponent} from "./catalog/catalog.component";
import {HomeComponent} from "./home/home.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {CartComponent} from "./cart/cart.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {ProductsService} from "./share/products.service";
import {ProductFormComponent} from "./product-form/product-form.component";
import {UnsavedDataGuardService} from "./share/unsaved-data-guard.service";
import {DialogService} from "./share/dialog.service";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductCreateComponent} from "./product-create/product-create.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    CatalogComponent,
    HomeComponent,
    CartComponent,
    AdminPageComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  providers: [
    ProductsService,
    UnsavedDataGuardService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
