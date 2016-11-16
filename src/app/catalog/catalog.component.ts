/**
 * Created by s.kharchevnyi on 10/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Product} from "../product/product";
import {ProductsService} from "../share/products.service";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [
    './catalog.component.css'
  ]
})
export class CatalogComponent implements OnInit{
  private products: Array<Product>;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(response => {
        if(response.success){
          this.products = response.data;
        }
      },
      error => {
        console.log('Error!', error);
      });

  }

}
