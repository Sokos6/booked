import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from './book';
import { OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  
  booksList: Book[] = [];
  book: Book;
  baseUrl: string = 'http://localhost:4567';

  constructor(private http: Http) {}

  ngOnInit() {
  	this.getBooksData();
  }

  getBooksData() {
  	const url = `${this.baseUrl}/books`;
  	this.http.get(url).subscribe(res => this.booksList = res.json() as Book[]);
  	console.log(this.booksList);
  }

  getBookInfo(id: number) {
  	const url = `${this.baseUrl}/books/${id}`;
  	this.http.get(url).subscribe(res => this.book = res.json() as Book);
  }
}
