import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choose',
  standalone: false,
})
export class ChoosePipe implements PipeTransform {
  transform(value: 'Y' | 'N' | null): unknown {
    switch (value) {
      case 'Y':
        return 'ถูกเลือก';
      case 'N':
        return 'ว่าง';
      default:
        return '-';
    }
  }
}
