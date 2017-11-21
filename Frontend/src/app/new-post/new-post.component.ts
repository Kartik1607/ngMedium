import { Component, OnInit } from '@angular/core';
import {UserService} from "../Services/user.service";
import {Router} from "@angular/router";

declare const $:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  category: {
    technology: boolean;
    creativity: boolean;
    entrepreneurship: boolean;
  };

  userData: any;
  image;
  showLoginForm: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    if(! this.userService.isUserLoggedIn()) {
      this.showLoginForm = true;
    }
    this.category = {
      technology: false, creativity: false, entrepreneurship: false
    };
  }

  ngOnInit() {
    this.userData = this.userService.getData();
  }

  showFileSelector() {
    $('#file_upload_input').click();
  }

  onImageChange(event) {
    if(! (event.target.files && event.target.files[0])) {
      return;
    }
    let reader = new FileReader();
    reader.onload = (e:any) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }


  checkLogin(event) {
    if(!event) {
      this.router.navigate(['/']);
    } else {
      this.userData = this.userService.getData();
      this.showLoginForm = false;
    }
  }
}
