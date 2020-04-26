import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'field'
})
export class FieldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const column: any = args[0];
    let result = value;
    column.field.split('.').forEach(f => {
      if (result === null) {
        return result;
      }
      result = result[f];
    });
    return result;
  }

}
