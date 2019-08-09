import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    _id: '',
    fullname: '',
    email: '',
    password: '',
    avatar: '/assets/avatars/avatar-default.png'
  };
  users: User[] = [];
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods
  postUser(user: User) {
    return this.http.post(environment.URL_API + '/register', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.URL_API + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.URL_API + '/profile');
  }

  // Change password and avatar
  getUsers() {
    return this.http.get(environment.URL_API + '/users');
  }
  putUser(user: User) {
    return this.http.put(environment.URL_API + '/user' + `/${user._id}`, user);
  }
  postForgot(user: User) {
    return this.http.post(environment.URL_API + '/forgot', user);
  }
  getReset(token: string) {
    this.http.get(environment.URL_API + '/reset' + `/${token}`)
  }
  postReset(user: User, token: string) {
    return this.http.post(environment.URL_API + '/reset' + `/${token}`, user);
  }

  //Helper Methods
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return null;
    }
  }

}//End class
