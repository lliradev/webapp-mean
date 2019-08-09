import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu';
declare var M: any;

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers: [MenuService]
})
export class MenuListComponent implements OnInit {
  isLoading = false;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.isLoading = true;
    this.menuService.findAll()
      .subscribe(res => {
        this.isLoading = false;
        this.menuService.menus = res as Menu[];
      });
  }

  onDeleteMenu(_id: string) {
    if (confirm('¿Seguro que quieres eliminarlo?')) {
      this.isLoading = true;
      this.menuService.deleteMenu(_id)
        .subscribe(res => {
          this.isLoading = false;
          this.getMenus();
          M.toast({ html: 'Eliminado exitosamente!', classes: 'rounded' });
        });
    }
  }

}//end class
