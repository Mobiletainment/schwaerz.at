import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) {
      return '';
    }

    const today = moment();
    const birthDate = moment(value);

    const age = today.diff(birthDate, 'years');
    return '' + Math.abs(age);
  }

}
