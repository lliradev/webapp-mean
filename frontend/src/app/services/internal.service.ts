import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Internal } from '../models/internal';
import { environment } from '../../environments/environment';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class InternalService {
  selectedInternal: Internal;
  allInternal: Internal[] = [];
  readonly API = '/internal';

  constructor(private http: HttpClient) {
    this.selectedInternal = new Internal;
  }

  findAll() {
    return this.http.get(environment.URL_API + this.API);
  }

  postInternal(Internal: Internal) {
    return this.http.post(environment.URL_API + this.API, Internal);
  }

  putInternal(internal: Internal) {
    return this.http.put(environment.URL_API + this.API + `/${internal._id}`, internal);
  }

  deleteInternal(_id: string) {
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
