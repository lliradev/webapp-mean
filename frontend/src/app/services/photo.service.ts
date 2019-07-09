import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  selectedPhoto: Photo;
  photos: Photo[];
  readonly API = '/photos';
  selectedFile = null;
  fileData: File = null;

  constructor(private http: HttpClient) {
    this.selectedPhoto = new Photo;
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  getPhotos() {
    return this.http.get(environment.URL_API + this.API);
  }

  postPhoto(Photo: Photo) {
    const fd = new FormData();
    fd.append('file', this.fileData);
    return this.http.post(environment.URL_API + this.API, Photo);
  }

  putPhoto(photo: Photo) {
    return this.http.put(environment.URL_API + this.API + `/${photo._id}`, photo);
  }

  deletePhoto(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('imageURL', this.selectedFile, this.selectedFile.name);
    return this.http.post(environment.URL_API + this.API, fd)
      .subscribe(res => {
        console.log(res);
      });
  }

}//End class
