import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  selectedSale: Sale;
  sales: Sale[] = [];
  readonly API = '/sales';

  constructor(private http: HttpClient) {
    this.selectedSale = new Sale();
  }

  postSale(sale: Sale) {
    return this.http.post(environment.URL_API + this.API, sale);
  }

  getSales() {
    return this.http.get(environment.URL_API + this.API);
  }

  putSale(sale: Sale) {
    return this.http.put(environment.URL_API + this.API + `/${sale._id}`, sale);
  }

  deleteSale(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

  // Reports
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '-' + new Date().getTime() + EXCEL_EXTENSION);
  }

}//End class
