import {NgModule} from "@angular/core";

import {HomeComponent} from "./home/home.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {Routes, RouterModule} from "@angular/router";
import {CartComponent} from "./cart/cart.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {UnsavedDataGuardService} from "./share/unsaved-data-guard.service";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AdminPageComponent},
  {
    path: 'admin/create',
    canDeactivate: [UnsavedDataGuardService],
    component: ProductCreateComponent},
  {
    path: 'admin/edit/:id',
    canDeactivate: [UnsavedDataGuardService],
    component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
