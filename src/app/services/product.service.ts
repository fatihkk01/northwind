import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    //Gelen datayı ProductResponseModeline map etmemizi sağlıyor.
    //Let sadece bulunduğu scope içerisinde geçerlidir.
    //Fonksiyon içerisindeki bir değişkende this.newPath şeklinde kullanmayız
    let newPath = this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);//gelen response response adı verdiğimiz nesne ile eşleşiyor
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);//gelen response response adı verdiğimiz nesne ile eşleşiyor
  }

  add(product:Product):Observable<ResponseModel>{
    //this.httpClient.post(api linki,apiye gönderilecek değer)
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
  }


}
