import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  avatar: string = '/assets/avatars/avatar-default.png';
  avatars = [
    {
      name: 'Avatar 1',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098858/avatars/girl_k71qcc.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098858/avatars/girl_k71qcc.png'
    },
    {
      name: 'Avatar 2',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098856/avatars/woman_vn0fzi.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098856/avatars/woman_vn0fzi.png'
    },
    {
      name: 'Avatar 3',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098847/avatars/boy_ayc1od.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098847/avatars/boy_ayc1od.png'
    },
    {
      name: 'Avatar 4',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098855/avatars/girl2_v7msds.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098855/avatars/girl2_v7msds.png'
    },
    {
      name: 'Avatar 5',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098855/avatars/girl3_wwefqz.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098855/avatars/girl3_wwefqz.png'
    },
    {
      name: 'Avatar 6',
      value: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098856/avatars/man_dch1vi.png',
      viewValue: 'https://res.cloudinary.com/drv584gsz/image/upload/v1564098856/avatars/man_dch1vi.png'
    }
  ];

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form: NgForm) {
    if (form.value._id) {
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Update successfully!', classes: 'rounded' });
          this.router.navigate(['/login']);
          this.getUsers();
        })
    } else {
      M.toast({ html: 'No found!', classes: 'rounded' });
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}//end class
