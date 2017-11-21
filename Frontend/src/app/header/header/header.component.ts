import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

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
  links: [{name: string, route: string}];
  showLoginForm: boolean;
  userData: object;
  constructor(private userService: UserService, private router: Router) {
    this.showLoginForm = false;
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
    this.userData = this.userService.getData();
  }

  toggleLoginForm(status) {
    if(status) {
      this.userService.setLoggedInStatus(true, status);
    }
    this.showLoginForm = !this.showLoginForm;
  }

  newPost(){
    this.router.navigate(['/write']);
  }

  logout() {
    this.userService.logout();
    this.userData = this.userService.getData();
  }

}
