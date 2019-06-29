import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  selectedPhoto: Photo;
  photos: Photo[];
  readonly URL_API = 'http://localhost:3000/api/photos';

  constructor(private http: HttpClient) {
    this.selectedPhoto = new Photo;
  }

  getPhotos() {
    return this.http.get(this.URL_API);
  }

  postPhoto(Photo: Photo) {
    return this.http.post(this.URL_API, Photo);
  }

  putPhoto(photo: Photo) {
    return this.http.put(this.URL_API + `/${photo._id}`, photo);
  }

  deletePhoto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}//End class
