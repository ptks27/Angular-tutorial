import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHttpBook]',
  standalone: false,
})
export class HttpBookDirective {
  @Output() appHttpBook = new EventEmitter();
  constructor(private http: HttpClient) {}

  @HostListener('input', ['$event']) loadBook(event: any) {
    const inputTextElement: HTMLInputElement = event.target;
    this.http
      .get<any>(
        `https://anapioficeandfire.com/api/books?name` + inputTextElement.value
      )
      .subscribe((res) => this.appHttpBook.emit(res));
  }
}
