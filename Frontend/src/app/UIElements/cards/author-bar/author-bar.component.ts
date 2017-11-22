import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-bar',
  templateUrl: './author-bar.component.html',
  styleUrls: ['./author-bar.component.css']
})
export class AuthorBarComponent implements OnInit {
  @Input() authorName: string;
  @Input() timeToRead: string;
  @Input() publishDate: string;

  constructor() { }

  ngOnInit() {
  }

}
