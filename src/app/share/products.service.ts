import { Injectable }     from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {Product} from "../product/product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface IProductsService {
  getProducts():  Observable<Response>;
  getCartProducts(): Observable<Response>;
  getProduct(id: number): Observable<Response>;
  createProduct(product: Product): Observable<Response>;
  updateProduct(product: Product): Observable<Response>;
  deleteProduct(product: Product): Observable<Response>;
}

export interface IApiResponse<T> extends Response{
  success: boolean;
  message: string;
  data: Array<Product>;
}

@Injectable()
export class ProductsService implements IProductsService{
  private baseUrl: string = 'http://localhost:7777/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http : Http) {}

  public getProducts() : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(null, 'get', this.baseUrl);
  }

  public getCartProducts() : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.getProducts();
  }

  public getProduct(id : number) : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(null, 'get', `${this.baseUrl}/${id}`);
  }

  public createProduct(product) : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(product, 'post', this.baseUrl);
  }

  public updateProduct(product) : Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest(product, 'put', this.baseUrl + '/' + product._id);
  }

  public deleteProduct(product: Product): Observable<IApiResponse<Product>> {
    return <Observable<IApiResponse<Product>>> this.makeRequest({}, 'DELETE', this.baseUrl + '/' + product._id);
  }

  private makeRequest(body: Object, method: string, url: string) : Observable<Response> {
    return this.http.request(url, {body: JSON.stringify(body), method, headers: this.headers})
    .map(response => response.json());
  }
}
