import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo';
declare var M: any;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {
  imageURL: string = "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  fileToUpload: File = null; //<----

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageURL = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  addPhoto(title, description, imageURL) {
    this.photoService.postPhoto(title.value, description.value, this.fileToUpload)
      .subscribe(res => {
        M.toast({ html: 'Saved successfully!', classes: 'rounded' });
        this.getPhotos();
      });
  }

  /*addPhoto(form: NgForm) {
    if (form.value._id) {
      this.photoService.putPhoto(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Updated successfully!', classes: 'rounded' });
          this.getPhotos();
        });
    } else {
      this.photoService.postPhoto()
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Saved successfully!', classes: 'rounded' });
          this.getPhotos();
        });
    }
  }*/

  getPhotos() {
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photoService.photos = res as Photo[];
        console.log(res);
      });
  }

  editPhotos(photo: Photo) {
    this.photoService.selectedPhoto = photo;
  }

  deletePhoto(_id: string) {
    if (confirm('Are you sure want to delete it?')) {
      this.photoService.deletePhoto(_id)
        .subscribe(res => {
          this.getPhotos();
          M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.photoService.selectedPhoto = new Photo();
    }
  }

}//End class
