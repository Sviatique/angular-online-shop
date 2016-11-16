/**
 * Created by s.kharchevnyi on 11/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../share/products.service";
import {Product} from "../product/product";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() : void {
    this.productsService.getCartProducts()
      .then(products => this.products = products);
  }
}
