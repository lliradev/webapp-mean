import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  avatar: string = '/assets/avatars/avatar-default.png';

  constructor(
    public userService: UserService,
    private router: Router) { }

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

}
