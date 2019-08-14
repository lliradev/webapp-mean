import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart = [];
  cartTotal = 0;
  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private menuService: MenuService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.menuService.getCart().subscribe(data => {
      this.cart = [...data];
      this.cartTotal = this.cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    });
  }

  doCheckout() {
    const order = {
      ...this.checkoutForm.value,
      items: this.cart
    };
    this.menuService.checkout(order).subscribe(res => {
      this.snackBar.open('Saved successfully', 'Success', {
        duration: 4000
      });
      this.menuService.clearCart();
      this.router.navigate(['/home']);
    });
  }

}//end class