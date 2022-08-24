import { Injectable } from '@angular/core';
import { add, subHours, subMinutes } from 'date-fns';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class DaysService {

  constructor() { }

  formatDays(days: number) {
    let daysS = 0;
    let months = 0;
    let years = 0;
    if (days >= 365) {
      years = Number((days / 365).toFixed(0));
      let cal_months = days - (365 * years);
      if (cal_months > 0) {
        if (cal_months >= 30) {
          months = Number(((cal_months / 30)).toFixed(0));
          let calcul_day = cal_months - (30 * months);
          daysS = calcul_day;
        }
      } else {

      }
    } else {
      if (days >= 30) {
        months = Number((days / 30).toFixed(0));
        daysS = days - (30 * months);

      } else {
        daysS = days;
      }
    }
    let format_days = "";
    format_days += years > 0 ? years + (years == 1 ? ' año ' : ' años ') : ''
    format_days += months > 0 ? months + (months == 1 ? ' mes ' : ' meses ') : ''
    format_days += daysS > 0 ? daysS + (daysS == 1 ? ' día ' : ' días ') : ''
    return format_days;
  }

  formatDaysWithDate(date) {
    let today = new Date()
    let date_of = new Date(date);
    let difference = Math.floor(((today.getTime() - date_of.getTime()) / (1000 * 60 * 60 * 24)));
    return this.formatDays(difference);
  }

  getHourDiff(initial_hour, final_hour, format?) {

    var entryHour = moment(initial_hour, 'hh:mm ');
    var exitHour = moment(final_hour, 'hh:mm ');

    const duration = moment.duration(exitHour.diff(entryHour))

    if (!format) {
      return duration.asHours();
    }
    if (format == "hours") {
      return duration.asHours();
    } else {
      if (format == "minutes") {
        return duration.asMinutes()
      } else {
        if (format == "seconds") {
          return duration.asSeconds()
        } else {
          if (format == "miliseconds") {
            return duration.asMilliseconds()
          }
        }
      }

    }

  }

  /**
* Esta función dcompara si la fecha dada es igual a la de hoy
* @access public
* @param {string} someDate fecha 
* @return string
*/
  isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }
  /**
* Esta función compara dos fechas dadas y retorna si es igual
* @access public
* @param {Date} date1 fecha uno
* @param {Date} date2 fecha dos
* 
* @return boolean
*/
  isEqualDate(date1: Date, date2: Date) {

    return date1.getDate() == date2.getDate() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getFullYear() == date2.getFullYear()
  }
  /**
 * Esta función suma un número de días a una fecha dada
 * @access public
 * @param {Date} date fecha uno
 * @param {number} numberOfDays número de días
 * 
 * @return Date
 */
  addDays(date, numberOfDays: number) {
    console.log("Date", date)

    const dateMoment = add(date, {
      days: numberOfDays
    });
    return dateMoment;
  }
  /**
 * Esta función suma un número de minutos a una fecha dada
 * @access public
 * @param {Date} date fecha
 * @param {number} numberOfMinutes número de minutos
 * 
 * @return Date
 */
  substractMinutes(date, numberOfMinutes: number) {
    const dateMoment = subMinutes(date, numberOfMinutes);
    return dateMoment;
  }

  /**
* Esta función suma un número de horas a una fecha dada
* @access public
* @param {Date} date fecha
* @param {number} numberOfHours número de horas
* 
* @return Date
*/
  substractHours(date, numberOfHours: number) {
    const dateMoment = subHours(date, numberOfHours);
    return dateMoment;
  }


}
