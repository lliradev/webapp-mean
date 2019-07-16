import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInternal'
})
export class FilterInternalPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultAllInternal = [];
    for (const internal of value) {
      if (internal.responsible.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultAllInternal.push(internal);
      };
    };
    return resultAllInternal;
  }

}
