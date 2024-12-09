import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  standalone: false,

  templateUrl: './shopping-search.component.html',
  styleUrl: './shopping-search.component.scss',
})
export class ShoppingSearchComponent implements OnInit {
  @Output() onInput = new EventEmitter<string>();
  @Output() onSeach = this.onInput.pipe(auditTime(400));
  constructor() {}

  ngOnInit(): void {}

  inputSearch(text: string) {
    this.onInput.emit(text);
  }
}
