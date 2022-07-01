import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private list: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  get list$(): Observable<Product[]> {
    return this.list.asObservable();
  }
  constructor(
    private http: HttpClient
  ) {

  }

  getListProducts() {

    return this.http.get('http://localhost:3000/products')
    // this.http.get<Product[]>('http://localhost:3000/products')
    //   .subscribe({
    //     next: (products) => this.list.next(products)
    //   });
  }
}
