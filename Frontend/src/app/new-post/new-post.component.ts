import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../Services/user.service";
import {Router} from "@angular/router";

declare const $:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {

  category: number;

  userData: any;
  image;
  showLoginForm: boolean = false;
  timeToReadInterval;
  timeToRead: string;

  constructor(private userService: UserService, private router: Router) {
    if(! this.userService.isUserLoggedIn()) {
      this.showLoginForm = true;
    }
    this.category = 0;
  }

  ngOnInit() {
    this.userData = this.userService.getData();
    if(!this.showLoginForm){
      this.watchContent(true);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timeToReadInterval);
  }

  showFileSelector() {
    $('#file_upload_input').click();
  }

  watchContent(status) {
    if(status) {
      clearInterval(this.timeToReadInterval);
      this.timeToReadInterval = setInterval(()=>{
        const content = $('#postContent').text();
        const words = content.trim().split(' ').length;
        this.timeToRead = `${Math.round(words / 200)} min read`;
      },2000);
    } else {
      clearInterval(this.timeToReadInterval);
    }
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
      this.watchContent(true);
    }
  }
}
