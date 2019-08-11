import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sale.service';
import { NgForm } from '@angular/forms';
import { Sale } from 'src/app/models/sale';
declare var M: any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SaleService) { }
  filterSales = '';
  ngOnInit() {
    this.getSales();
  }

  addSale(form: NgForm) {
    if (form.value._id) {
      this.saleService.putSale(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Actualizado satisfactoriamente' });
          this.getSales();
        })
    } else {
      this.saleService.postSale(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: 'Guardado satisfactoriamente' });
          this.getSales();
        });
    }
  }

  getSales() {
    this.saleService.getSales()
      .subscribe(res => {
        this.saleService.sales = res as Sale[];
      });
  }

  editSale(sale: Sale) {
    this.saleService.selectedSale = sale;
  }

  deleteSale(_id: string) {
    if (confirm('Estas seguro de eliminarlo?')) {
      this.saleService.deleteSale(_id)
        .subscribe(res => {
          this.getSales();
          M.toast({ html: 'Eliminado satisfactoriamente' })
        });
    }
  }

  getTotal() {
    return this.saleService.sales.map(i => i.toPay).reduce((acc, value) => acc + value, 0);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.saleService.selectedSale = new Sale();
    }
  }

  /* Tabs */
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}//end class