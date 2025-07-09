import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObjects: any[], searchTerm: string): any[] {
    if (!arrayOfObjects || !searchTerm) {
      return arrayOfObjects;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return arrayOfObjects.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  }

}
