import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class HeaderComponent implements OnInit {
  @Input('sticky') sticky: boolean;
  isLoggedId: boolean = false;
  links: [{name: string, route: string}];
  showLoginForm: boolean;
  constructor() {
    this.showLoginForm = false;
    this.isLoggedId = false;
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

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  newPost(){

  }

}
