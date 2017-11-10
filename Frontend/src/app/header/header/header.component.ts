import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('sticky') sticky: boolean;
  links: [{name: string, route: string}];
  constructor() {
    this.links = [{
      name: 'Home',
      route: ''
    }, {
      name: 'Technology',
      route: 'category/technology'
    }, {
      name: 'Creativity',
      route: 'category/creativity'
    }, {
      name: 'Entrepreneurship',
      route: 'category/entrepreneurship'
    }, {
      name: 'Popular',
      route: 'category/popular'
    }];
  }

  ngOnInit() {
  }

}
