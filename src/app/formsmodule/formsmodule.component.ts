import { Component } from '@angular/core';

@Component({
  selector: 'app-formsmodule',
  standalone: false,

  templateUrl: './formsmodule.component.html',
  styleUrl: './formsmodule.component.scss',
})
export class FormsmoduleComponent {
  employeeCode = '007';
  employeeName = 'BoppinCode';
}
