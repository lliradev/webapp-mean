import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountInternal'
})
export class FilterCountInternalPipe implements PipeTransform {

  transform(allInt: any[], searchText: string): any[] {
    if (!allInt) return [];
    if (!searchText) return allInt;

    searchText = searchText.toLowerCase();
    return allInt.filter(it => {
      return it.responsible.toLowerCase().includes(searchText);
    }).reduce((a, b) => a + b, 0);
  }

}
