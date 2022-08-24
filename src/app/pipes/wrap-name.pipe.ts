import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapName'
})
export class WrapNamePipe implements PipeTransform {

  transform(value: string, max:number): string {
    if(value.length > max){
      return value.slice(0,max) + "."
    }
    return value;
  }

}
