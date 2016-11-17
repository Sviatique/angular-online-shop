import {Component, OnInit, Input, EventEmitter, Output, OnDestroy} from '@angular/core';
import { ProductsService } from "../share/products.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Product } from "../product/product";
import { DialogService } from "../share/dialog.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { ProductFormValidator } from './product-form.validator';
@Component({
  selector: 'product-form',
  templateUrl: 'product-form.component.html',
  styleUrls: [
    './product-form.component.css'
  ]
})

export class ProductFormComponent implements OnInit, OnDestroy{

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
  private isSubmitted = false;
  private CSVPattern = '';
  private pricePattern = '[1-9]\\d{0,5}';
  @Input()  private product: Product;
  @Output() private submitForm = new EventEmitter<Product>();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    public dialogService: DialogService,
    private formBuilder: FormBuilder) {}

  public ngOnInit() : void {
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
      category: [this.formValues.category, [Validators.required, Validators.maxLength(20)]],
      title: [this.formValues.title, [Validators.required, Validators.maxLength(20)]],
      brand: [this.formValues.brand, [Validators.required, Validators.maxLength(20)]],
      price: [this.formValues.price, [Validators.required, ProductFormValidator.numberInRange(0, 100000)]],
      image: [this.formValues.image, Validators.required],
      description: [this.formValues.description, [Validators.required, Validators.maxLength(1000)]],
      details: [this.formValues.details, [Validators.required, Validators.pattern(this.CSVPattern)]]
    });
  }

  public ngOnDestroy(): void {
    this.productForm = null;
  }
  private checkValidity(fieldName): boolean {
    return this.productForm.controls[fieldName].invalid;
  }
  private submit(): void {
    this.isSubmitted = true;
    if(this.productForm.valid){
      const newProduct: Product = Object.assign({}, this.productForm.value, {
        _id: this.product ? this.product._id : Date.now(),
        creationDate: this.product ? this.product.creationDate : Date.now()
      });
      this.submitForm.emit(newProduct);
    }
  }
}
