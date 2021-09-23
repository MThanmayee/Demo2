import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:3689/api/product";
  httpOptions = {
    headers : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  constructor(private client:HttpClient) { }
  GetProducts():Observable<Product[]>
  {
    return this.client.get<Product[]>(this.url);
  }
  GetProductById(id:number)
  {
    return this.client.get<Product>(this.url+'/'+id);
  }
  AddProduct(product:Product)
  {
    return this.client.post(this.url,JSON.stringify(product),this.httpOptions);
  }
  updateProduct(id:number,product:Product)
  {
    return this.client.put(this.url+"/"+id,JSON.stringify(product),this.httpOptions);
  }
  deleteProductById(id:number)
  {
    return this.client.delete(this.url+"/"+id);
  }
}
