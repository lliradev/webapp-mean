import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postForgot(form.value)
      .subscribe(res => {
        this.snackBar.open('An e-mail has been sent to ' + this.userService.selectedUser.email
          + ' with further instructions.', 'Success', {
            duration: 4000
          });
        this.resetForm(form);
      });
    this.router.navigate(['/login']);
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      _id: '',
      fullname: '',
      email: '',
      password: '',
      avatar: ''
    };
    form.resetForm();
  }

}
