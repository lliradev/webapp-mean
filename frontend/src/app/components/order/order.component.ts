import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from '../../services/order.service';
import { MatSnackBar } from '@angular/material';
import { saveAs } from 'file-saver';
declare var M: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  p: number = 1;
  order;
  readonly API = '/orders';

  orders = [];
  constructor(
    public menuService: MenuService,
    public orderService: OrderService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.menuService.getOrders()
      .subscribe(data => this.orders = [...data]);
  }

  totalEarnings(orders) {
    return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
  }
  totalItems(orders) {
    return orders.reduce((acc, cur) => acc + cur.items.length, 0);
  }
  orderTotal(items) {
    return items.reduce((acc, cur) => acc + Number(cur.price), 0);
  }

  deleteOrder(_id: string) {
    if (confirm('Estas seguro de eliminarlo?')) {
      this.orderService.deleteOrder(_id)
        .subscribe(res => {
          this.getOrders();
          M.toast({ html: 'Eliminado satisfactoriamente', classes: 'rounded' })
        });
    }
  }

  downloadHandler(_id) {
    this.orderService.downloadOrder(_id)
      .subscribe(data => {
        this.snackBar.open('Saved successfully', 'Success', {
          duration: 4000
        });
        saveAs(data, null);
      });
  }

}//end class