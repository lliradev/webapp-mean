import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { External } from '../models/external';
import { environment } from '../../environments/environment';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  selectedExternal: External;
  allExternal: External[] = [];
  readonly API = '/external';

  constructor(private http: HttpClient) {
    this.selectedExternal = new External();
  }

  findAll() {
    return this.http.get(environment.URL_API + this.API);
  }

  postExternal(external: External) {
    return this.http.post(environment.URL_API + this.API, external);
  }

  putExternal(external: External) {
    return this.http.put(
      environment.URL_API + this.API + `/${external._id}`,
      external
    );
  }

  deleteExternal(id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${id}`);
  }

  // Reports
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + '-' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
