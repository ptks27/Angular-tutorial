import { Component } from '@angular/core';
import { BookService } from '../../shared/book.service';
import { Book } from '../test-request-get/test-request.get';

@Component({
  selector: 'app-test-request-service',
  standalone: false,

  templateUrl: './test-request-service.component.html',
  styleUrl: './test-request-service.component.scss',
})
export class TestRequestServiceComponent {
  bookList: Book[] = [];
  constructor(private service: BookService) {
    this.service.httpBook().subscribe((res) => {
      this.bookList = res;
    });
  }

  ngOnInit(): void {}
}
