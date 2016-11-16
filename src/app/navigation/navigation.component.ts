/**
 * Created by s.kharchevnyi on 11/11/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ProductsService} from "../share/products.service";
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{
  constructor(private productsService : ProductsService) {}
  numberOfProducts : Number;

  ngOnInit() : void{
    this.productsService.getCartProducts()
      .then(products => this.numberOfProducts = products.length)
      .catch(error => console.log('Something went wrong - ', error));
  }
}
