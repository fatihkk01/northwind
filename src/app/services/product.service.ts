import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44380/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    //Gelen datayı ProductResponseModeline map etmemizi sağlıyor.
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);//gelen response response adı verdiğimiz nesne ile eşleşiyor
  }
}
