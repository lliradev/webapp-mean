import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  notes = [
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'mexico' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'usa' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'argentina' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'peru' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'belgium' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'england' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'france' },
    { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident quisquam quod dignissimos quibusdam', location: 'chile' },
  ];
  step = 0;
  userDetails;
  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          this.userDetails = res['user'];
          console.log(this.userDetails._id);
        },
        err => { }
      )
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  onEditAvatar() {
    this.router.navigate(['/edit']);
  }

}//End class
