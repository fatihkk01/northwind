import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44380/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    //Gelen datayı ProductResponseModeline map etmemizi sağlıyor.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);//gelen response response adı verdiğimiz nesne ile eşleşiyor
  }
}
