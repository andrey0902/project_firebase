import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDate'})
export class DateMy implements PipeTransform {
  public transform(value: string): string {
    if (!value) {
      return 'N/A';
    }
    let date = new Date(value);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  }
}
