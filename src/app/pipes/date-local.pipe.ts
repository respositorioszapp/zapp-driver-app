import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocal'
})
export class DateLocalPipe implements PipeTransform {

  transform(value: string, format?: string): string {
    let countDownDate = new Date(value);
    if (!format) {
      const lang = navigator.language;
      const monthName = countDownDate.toLocaleString(lang, {
        month: 'long'
      });
      const dayName = countDownDate.toLocaleString(lang, {
        weekday: 'long'
      });
      return `${monthName} ${(countDownDate.getDate() + 1)}, ${countDownDate.getFullYear()} `;
    }else{
      if(format == 'hour'){
        return `${countDownDate.getHours()}: ${countDownDate.getMinutes()}  `;
      }
      return ''
    }

  }

}
