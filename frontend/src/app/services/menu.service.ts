import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  selectedMenu: Menu;
  menus: Menu[] = [];
  readonly API = '/menus';

  constructor(private http: HttpClient) {
    this.selectedMenu = new Menu;
  }

  findAll() {
    return this.http.get(environment.URL_API + this.API);
  }

  getMenu(_id: string) {
    return this.http.get<Menu>(environment.URL_API + this.API + `/${_id}`);
  }

  postMenu(Menu) {
    return this.http.post(environment.URL_API + this.API, Menu);
  }

  putMenu(menu, _id: string) {
    return this.http.put<any>(environment.URL_API + this.API + `/${_id}`, menu);
  }

  deleteMenu(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

}//End class
