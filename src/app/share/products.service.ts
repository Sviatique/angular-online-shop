/**
 * Created by s.kharchevnyi on 11/11/2016.
 */
import { Injectable }     from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {Product} from "../product/product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


interface IProductsService {
  getProducts():  Observable<Response>;
  getCartProducts(): Promise<Product[]>;
  getProduct(id: number): Observable<Response>;
  createProduct(product: Product): Observable<Response>;
}

export interface IApiResponse<T> extends Response{
  success: boolean;
  message: string;
  data: Array<T>;
}

@Injectable()
export class ProductsService implements IProductsService{

  private baseUrl: string = 'http://localhost:7777/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});
  private products : Product[] = [{
    _id: 1,
    category: 'Products',
    title: 'Product1',
    brand: 'product1 brand',
    creationDate: '10/10/2016',
    price: '1700',
    image: 'prod 1 image',
    description: 'prod 1 desc',
    details: 'prod1 details'
  },
  {
    _id: 2,
    category: 'Products',
    title: 'Product2',
    brand: 'product2 brand',
    creationDate: '10/10/2016',
    price: '1900',
    image: 'prod 2 image',
    description: 'prod 2 desc',
    details: 'prod2 details'
  }];
  constructor (private http : Http) {

  }
  getProducts() : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(null, 'get', this.baseUrl);
  }

  getCartProducts() : Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  getProduct(id : number) : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(null, 'get', `${this.baseUrl}/${id}`);
  }

  createProduct(product) : Observable<Response> {
    return this.makeRequest(product, 'post', this.baseUrl);
  }

  updateProduct(product) : Observable<Response> {
    return this.makeRequest(product, 'put', this.baseUrl + '/' + product._id);
  }
  makeRequest(body: Object, method: string, url: string) : Observable<Response> {
    return this.http.request(url, {body: JSON.stringify(body), method, headers: this.headers})
    .map(response => response.json());
  }
}
