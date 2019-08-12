import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  private token = '';

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.token = this.route.snapshot.params['token'];
  }

  onSubmit() {
    let { password, confirmPassword } = this.form.value;
    if (password !== confirmPassword) {
      this.snackBar.open('Both password should match', 'warning', {
        duration: 4000
      });
      return;
    }
    this.userService.postReset({ token: this.token, password })
      .subscribe(data => {
        this.snackBar.open('Success! Your password has been changed.', 'Success', {
          duration: 4000
        });
        this.router.navigate(['/login']);
      });
  }

  private initForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

}//End class
