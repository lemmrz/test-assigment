import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('assets/DATA.json')
  }
}
