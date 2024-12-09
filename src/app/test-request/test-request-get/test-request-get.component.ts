import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-request.get';

@Component({
  selector: 'app-test-request-get',
  standalone: false,

  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss',
})
export class TestRequestGetComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  searchBookList(name: string) {
    this.http
      .get<Book[]>('https://anapioficeandfire.com/api/books?name=' + name)
      .subscribe((response) => {
        this.bookList = response;
      });
  }
}
