import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  selectedSale: Sale;
  sales: Sale[] = [];
  readonly API = '/sales';

  constructor(private http: HttpClient) {
    this.selectedSale = new Sale();
  }

  postSale(sale: Sale) {
    return this.http.post(environment.URL_API + this.API, sale);
  }

  getSales() {
    return this.http.get(environment.URL_API + this.API);
  }

  putSale(sale: Sale) {
    return this.http.put(environment.URL_API + this.API + `/${sale._id}`, sale);
  }

  deleteSale(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

}//End class
