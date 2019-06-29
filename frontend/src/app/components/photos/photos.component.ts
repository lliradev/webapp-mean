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

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.getPhotos();
    }

    addPhoto(form: NgForm) {
        if (form.value._id) {
            this.photoService.putPhoto(form.value)
                .subscribe(res => {
                    this.resetForm(form);
                    M.toast({ html: 'Updated successfully!', classes: 'rounded' });
                    this.getPhotos();
                });
        } else {
            this.photoService.postPhoto(form.value)
                .subscribe(res => {
                    this.resetForm(form);
                    M.toast({ html: 'Saved successfully!', classes: 'rounded' });
                    this.getPhotos();
                });
        }
    }

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
