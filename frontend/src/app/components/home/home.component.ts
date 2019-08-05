import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading = false;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.isLoading = true;
    this.menuService.findAll()
      .subscribe(res => {
        this.isLoading = false;
        this.menuService.menus = res as Menu[];
      });
  }

}//end class
