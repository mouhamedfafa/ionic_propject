import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailsCommande'
})
export class DetailsCommandePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
