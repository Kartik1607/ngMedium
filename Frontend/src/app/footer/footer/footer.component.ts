import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  content: object[];
  constructor() {
    this.content = [
      {
        name: 'Help'
      }, {
        name: 'Status'
      }, {
        name: 'Blog'
      }, {
        name: 'Careers'
      }, {
        name: 'Privacy'
      }, {
        name: 'Terms'
      }, {
        name: 'About'
      }
    ];
  }

  ngOnInit() {
  }

}
