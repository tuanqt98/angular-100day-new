import { Component, OnInit } from '@angular/core';
import { Author, authors } from 'src/app/authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  constructor() {}

  ngOnInit(): void {}
}
