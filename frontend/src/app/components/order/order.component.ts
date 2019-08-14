import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from '../../services/order.service';
declare var M: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  readonly API = '/orders';

  orders = [];
  constructor(
    public menuService: MenuService,
    public orderService: OrderService) { }

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

}//end class