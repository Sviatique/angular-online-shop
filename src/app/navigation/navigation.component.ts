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
  private numberOfProducts : Number;

  constructor(private productsService : ProductsService) {}

  public ngOnInit() : void{
    this.productsService.getCartProducts()
      .subscribe(
        products => this.numberOfProducts = products.data.length,
        error => console.log('Error!', error)
      );
  }
}
