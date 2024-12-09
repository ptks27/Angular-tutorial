import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-createvalidator',
  standalone: false,

  templateUrl: './createvalidator.component.html',
  styleUrl: './createvalidator.component.scss',
})
export class CreatevalidatorComponent {
  idCardValidator: ValidatorFn = (control: AbstractControl) => {
    const idCard: string | null = control.value;
    if (idCard) {
      if (idCard.length !== 13) {
        return { idCard: true };
      }

      let index = 13;
      let sum = 0;
      for (const num of idCard.substring(0, 12)) {
        if (isNaN(Number(num))) {
          return { idCard: true };
        }
        sum += Number(num) * index--;
      }
      const mod = sum % 11;
      const lastNumber = `${11 - mod}`.slice(-1);

      if (idCard.charAt(12) !== lastNumber) {
        return { idCard: true };
      }
    }
    return null;
  };
  
  idCard = new FormControl(null, [Validators.required, this.idCardValidator]);
}
