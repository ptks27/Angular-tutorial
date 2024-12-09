import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-title',
  standalone: false,
  
  templateUrl: './edit-title.component.html',
  styleUrl: './edit-title.component.scss'
})
export class EditTitleComponent {
title = 'my-new-project'
ninjaName = 'naruto'

ninjaConsole(){
  console.log('console ninjaName : ',this.ninjaName);
  
}
changNinjaName(name:string) {
  this.ninjaName = name;
}
}
