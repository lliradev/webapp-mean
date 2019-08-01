import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo';
import { ActivatedRoute } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {
  thumbnail: string = '';
  //fileToUpload: File = null; //<----
  p: number = 1;
  isLoading = false;
  photoForm: FormGroup

  constructor(public photoService: PhotoService, private fb: FormBuilder,
    private route: ActivatedRoute) { } //Cambiar despues a private

  ngOnInit() {
    this.getPhotos();

    const _id = this.route.snapshot.paramMap.get('_id');
    if (_id) {
      console.log('Edit photo');
      this.photoService.getPhoto(_id)
        .subscribe(
          res => {
            this.photoForm.patchValue({
              /*title: res.title,
              description: res.description,
              _id: res._id*/
            });
            //this.thumbnail = res.imageURL;
          }
        );
    } else {
      console.log('Create photo');
    }

    this.photoForm = this.fb.group({
      _id: [''],
      title: [''],
      description: [''],
      imageURL: ['']
    });
  }

  /*handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.thumbnail = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }*/

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.photoForm.get('imageURL').setValue(file);
      //Show image preview
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.thumbnail = event.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  addPhoto() {
    const fd = new FormData();
    fd.append('title', this.photoForm.get('title').value);
    fd.append('description', this.photoForm.get('description').value);
    fd.append('imageURL', this.photoForm.get('imageURL').value);
    const _id = this.photoForm.get('_id').value;
    if (_id) {
      console.log(_id);
      this.isLoading = true;
      this.photoService.putPhoto(fd)
        .subscribe(res => {
          this.isLoading = false;
          this.resetForm();
          M.toast({ html: 'Update successfully!', classes: 'rounded' });
          this.getPhotos();
        });
      console.log('Edita?');
    } else {
      this.isLoading = true;
      this.photoService.postPhoto(fd)
        .subscribe(
          res => {
            this.thumbnail = '';
            this.isLoading = false;
            this.resetForm();
            M.toast({ html: 'Saved successfully!', classes: 'rounded' });
            this.getPhotos();
          }
        );
    }

    /*this.isLoading = true;
    this.photoService.postPhoto(title.value, description.value, this.fileToUpload).subscribe(
      res => {
        this.thumbnail = '/assets/img/image.png';
        this.isLoading = false;
        M.toast({ html: 'Saved successfully!', classes: 'rounded' });
        this.getPhotos();
      }
    );*/
  }

  getPhotos() {
    this.isLoading = true;
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photoService.photos = res as Photo[];
        console.log(res);
        this.isLoading = false;
      });
  }

  editPhoto(photo) {
    this.photoService.selectedPhoto = photo;
    console.log('Edita2?');
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

  resetForm() {
    this.photoForm.reset();
  }

  /* Tabs */
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}//End class
