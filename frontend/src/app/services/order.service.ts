import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly API = '/orders';

  constructor(private http: HttpClient) { }

  deleteOrder(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

}//End class
