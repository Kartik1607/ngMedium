import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {UserService} from "../../../Services/user.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../../Services/auth-service.service";

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
export class HeaderComponent implements OnInit, OnDestroy {

  @Input('sticky') sticky: boolean;
  links: [{name: string, route: string}];
  showLoginForm: boolean;
  isLoggedIn: boolean;
  constructor(private router: Router, private authService: AuthServiceService) {
    this.showLoginForm = false;
    this.isLoggedIn = false;
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
    if(sessionStorage.getItem('UID') && this.links.length == 5){
      this.links.push({
        name: 'Favourites',
        route: 'category/favourite'
      });
    }
  }

  ngOnInit() {
    this.updateLogin();
  }

  ngOnDestroy(): void {
    this.authService.loginStatus.unsubscribe();
  }

  updateLogin() {
    this.authService.loginStatus.subscribe(data=>{
      this.isLoggedIn = data;
      if(data && this.links.length ==5) {
        this.links.push({
          name: 'Favourites',
          route: 'category/favourite'
        });
      }
      if(!data && this.links.length == 6) {
        this.links.pop();
      }
    })
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  newPost(){
    this.router.navigate(['/write']);
  }

  logout() {
    this.authService.logoutUser();
  }

}
