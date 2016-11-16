import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ProductsService} from "../share/products.service";
import {Params, ActivatedRoute} from "@angular/router";
import {Product} from "../product/product";
import {DialogService} from "../share/dialog.service";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'product-form',
  templateUrl: 'product-form.component.html'
})

export class ProductFormComponent implements OnInit{
  private productForm: FormGroup;

  private formValues = {
    category: '',
    title: '',
    brand: '',
    price: '',
    image: '',
    description: '',
    details: ''
  };
  @Input()  private product: Product;
  @Output() private submitForm = new EventEmitter<Product>();
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    public dialogService: DialogService,
    private formBuilder: FormBuilder) {}


  ngOnInit() : void {
    console.log(this.submitForm)
    if(this.product) {
      this.formValues = {
        category: this.product.category,
        title: this.product.title,
        brand: this.product.brand,
        price: this.product.price,
        image: this.product.image,
        description: this.product.description,
        details: this.product.details
      };
    }
    this.productForm = this.formBuilder.group({
      category: this.formValues.category,
      title: this.formValues.title,
      brand: this.formValues.brand,
      price: this.formValues.price,
      image: this.formValues.image,
      description: this.formValues.description,
      details: this.formValues.details
    });
  }

  private submit(): void {
    const newProduct: Product = Object.assign({}, this.productForm.value, {
      _id: this.product ? this.product._id : Date.now(),
      creationDate: this.product ? this.product.creationDate : Date.now()
    });

    this.submitForm.emit(newProduct);
  }
}
