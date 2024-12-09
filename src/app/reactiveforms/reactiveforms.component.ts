import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: false,

  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'], // Corrected the property name to 'styleUrls'
})
export class ReactiveformsComponent {
  bmi = 0;
  info = '';

  weightForm = new FormControl(null, Validators.required);
  heightForm = new FormControl(null, Validators.required);

  emailForm = new FormControl(null, [Validators.required, Validators.email]);

  calculate() {
    if (this.weightForm.invalid || this.heightForm.invalid) {
      return;
    }
    const weight = this.weightForm.value;
    const height = this.heightForm.value;

    if (weight !== null && height !== null && height > 0) {
      this.bmi = weight / height ** 2;
      this.info = ` BMI ของคุณคือ ${this.bmi.toFixed(2)}`;
    } else {
      this.info = 'โปรดกรอกค่า weight และ height ให้ถูกต้อง';
    }
  }
}
