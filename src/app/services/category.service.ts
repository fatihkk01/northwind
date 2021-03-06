import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44380/api/categories/getall';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    //Gelen datayı ProductResponseModeline map etmemizi sağlıyor.
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);//gelen response response adı verdiğimiz nesne ile eşleşiyor
  }
}