/**
 * Created by s.kharchevnyi on 11/11/2016.
 */

import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../share/products.service";
import {Product} from "../product/product";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent implements OnInit{
  products : Array<Product>;
  constructor(
    private productsService: ProductsService,
    private router: Router) {}

  ngOnInit() : void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products.data);
  }

  edit(product: Product) : void {
    this.router.navigate(['/admin/edit', product._id]);
  }

  create() : void {
    this.router.navigate(['/admin/create']);
  }
}