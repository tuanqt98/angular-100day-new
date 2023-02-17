import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/authors';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  constructor() {}

  ngOnInit(): void {}
}
