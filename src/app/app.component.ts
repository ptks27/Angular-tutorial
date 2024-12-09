import { Component } from '@angular/core';
import { BookService } from './shared/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-new-project';

  constructor(private service: BookService) {
    this.service.httpBook().subscribe((val) => console.log(val));
  }
}
