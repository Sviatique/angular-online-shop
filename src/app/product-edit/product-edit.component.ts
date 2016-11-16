import {Params, ActivatedRoute} from "@angular/router";
import {OnInit} from "@angular/core";
import {ProductsService} from "../share/products.service";
import {Product} from "../product/product";
import {Component} from "@angular/core";

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit{
  private product : Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() : void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if(id){
        this.productsService.getProduct(id)
          .subscribe(product => {
            if(product.success){
              this.product = product.data[0];
            }
          });
      }
    });
  }

  private updateProduct(product: Product) {
    this.productsService.updateProduct(product)
      .subscribe(response => {
        console.log(response);
      });
  };
}
