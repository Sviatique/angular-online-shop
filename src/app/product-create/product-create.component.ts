import {Params, ActivatedRoute} from "@angular/router";
import {OnInit} from "@angular/core";
import {ProductsService} from "../share/products.service";
import {Product} from "../product/product";
import {Component} from "@angular/core";

/**
 * Created by s.kharchevnyi on 14/11/2016.
 */

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent{
  private product : Product = new Product();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  private createProduct(product: Product) : void {
    this.productsService
      .createProduct(product)
      .subscribe(response => {
        if(response.success) {
          alert('Product was successfully created');
        }
      })
  }
}
