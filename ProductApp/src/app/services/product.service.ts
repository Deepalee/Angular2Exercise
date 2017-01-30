import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from '../products/product';

@Injectable()
export class ProductService {

  constructor(public httpSvc: Http) { }


  getProductList(): Observable<Product[]> {
    return this.httpSvc.get("http://localhost:4000/api/products")
      .map((response) => <Product[]>response.json())
      .catch((error) => Observable.throw(error))
  }

  addProduct(product):Observable<any> {
    return this.httpSvc.post('http://localhost:4000/api/products/create',product)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error))
  }

  updateProduct(product):Observable<any> {
    return this.httpSvc.put('http://localhost:4000/api/products/create', Product)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error))
  }

}
