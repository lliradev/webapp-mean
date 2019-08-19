import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { NgForm } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
declare var M: any;

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
  providers: [SupplierService]
})
export class SuppliersComponent implements OnInit {
  filterSupplier = '';
  p: number = 1;
  isLoading = false;

  constructor(public supplierService: SupplierService) { } //Cambiar despues a private

  ngOnInit() {
    this.getSuppliers();
  }

  addSupplier(form: NgForm) {
    if (form.value._id) {
      this.isLoading = true;
      this.supplierService.putSupplier(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.isLoading = false;
          M.toast({ html: 'Updated successfully!', classes: 'rounded' });
          this.getSuppliers();
        });
    } else {
      this.isLoading = true;
      this.supplierService.postSupplier(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.isLoading = false;
          M.toast({ html: 'Saved successfully!', classes: 'rounded' });
          this.getSuppliers();
        });
    }
  }

  getSuppliers() {
    this.isLoading = true;
    this.supplierService.getSuppliers()
      .subscribe(res => {
        this.supplierService.suppliers = res as Supplier[];
        this.isLoading = false;
      })
  }

  editSupplier(supplier: Supplier) {
    this.supplierService.selectedSupplier = supplier;
  }

  deleteSupplier(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.supplierService.deleteSupplier(_id)
        .subscribe(res => {
          this.getSuppliers();
          M.toast({ html: 'Deleted successfully!', classes: 'rounded' })
        })
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.supplierService.selectedSupplier = new Supplier();
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

  // Reports
  exportAsXLSX(): void {
    this.supplierService.exportAsExcelFile(this.supplierService.suppliers, 'Proveedores');
  }

  downloadSupplierPDF() {
    const doc = jsPDF();
    this.generateHeader(doc);
    this.generateInformation(doc);
    doc.save('Proveedores-' + new Date().getTime() + '.pdf')
  }

  generateHeader(doc) {
    var image = 'data:image/jpeg;base64,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'
    doc.addImage(image, 'PNG', 180, 10, 20, 20);
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text("Proveedores - SAM 13", 50, 22, { align: "center" });
  }
  generateInformation(doc) {
    var id = document.getElementById('table-suppliers');
    doc.autoTable(
      {
        margin: {
          bottom: 60,
          top: 40
        },
        html: id
      }
    );
  }

}//End class
