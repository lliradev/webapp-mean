import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as html2canvas from 'html2canvas';
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

  downloadMenuPDF() {
    html2canvas(document.getElementById('menus'), {
      allowTaint: true,
      useCORS: false,
      scale: 1
    }).then(function (canvas) {
      var img = canvas.toDataURL("image/*");
      var doc = new jsPDF();
      doc.addImage(img, 'JPG', 7, 20, 195, 105);
      doc.save('Menus-' + new Date().getTime() + '.pdf');
    });
  }

}//end class
