import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../Services/auth-service.service";
import {ISticky} from "../../common/ISticky";
import {PostService} from "../../Services/post.service";

declare const $:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements ISticky, OnInit, OnDestroy {

  category: number;
  userData: any;
  image;
  showLoginForm: boolean = false;
  timeToReadInterval;
  timeToRead: string;
  isLoggedIn = false;

  constructor(private authService: AuthServiceService,
              private userService: UserService,
              private postService: PostService,
              private router: Router) {
    this.category = 0;
    this.userData = {};
    if(sessionStorage.getItem('UID')){
      this.userData = {};
      this.toggleForm(true);
      this.isLoggedIn = true;
      this.showLoginForm = false;
      this.watchContent(true);
    }else {
      this.showLoginForm = true;
    }
  }

  ngOnInit() {
    this.authService.loginStatus.subscribe(data=>{
      this.toggleForm(data);
    });
  }

  getLoggedInUser() {
    this.authService.getLoggedInUser().subscribe(user => {
      if(user['_id']) {
        this.userData = user;
        this.isLoggedIn = true;
        this.showLoginForm = false;
        this.watchContent(true);
      }else{
        this.toggleForm(false);
      }
    });
  }

  toggleForm(value) {
    if(value){
      this.getLoggedInUser();
    } else {
      this.userData = {};
      this.isLoggedIn = false;
      this.showLoginForm = true;
      this.watchContent(false);
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
    if(event) {
      this.userService.getUserById(event)
        .subscribe(data => {
          this.userData = data;
          this.showLoginForm = false;
          this.isLoggedIn = true;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  savePost(title, content) {
    const file = $('#file_upload_input').prop('files')[0]
    if (!file) {
      return;
    } else {
      let category = '';
      switch(this.category) {
        case 0: category = 'technology'; break;
        case 1: category = 'creativity'; break;
        case 2: category = 'entrepreneurship'; break;
      }
      this.postService.savePost(this.userData._id, title, content, category, file)
        .then(data => {
          console.log(data);
          this.router.navigate([`/posts/${data['_id']}`]);
        });
    }
  }

  needSticky() {
   return true;
  }
}
