import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: false,

  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
})
export class DirectiveComponent {
  bookList = [];
  constructor(private http: HttpClient) {}

  loadBook(event: any) {
    const inputTextElement: HTMLInputElement = event.target;
    this.http
      .get<any>(
        `https://anapioficeandfire.com/api/books?name` + inputTextElement.value
      )
      .subscribe((res) => (this.bookList = res));
  }
}
