import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../share/products.service";
import {Product} from "../product/product";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  private products: Array<Product> = [];

  constructor(private productsService: ProductsService) {}

  public ngOnInit() : void {
    this.productsService.getCartProducts()
      .subscribe(products => this.products = products.data);
  }
}
