import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform{

  transform(value: string = '', howMany: number = 20): string {

    let result = '';

    if ( howMany < value.length ){
        result = value.substring(0, howMany);
    }   else {
      result = value;
    }

    return result;
  }
}
