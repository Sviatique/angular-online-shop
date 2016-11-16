import { Injectable }     from '@angular/core';
import {CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot}    from '@angular/router';
import {ProductFormComponent} from "../product-form/product-form.component";

@Injectable()
export class UnsavedDataGuardService implements CanDeactivate<ProductFormComponent>{
  canDeactivate(
    component: ProductFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    console.log(component)
    if (component) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return component.dialogService.confirm('Discard changes?');
  }
}

