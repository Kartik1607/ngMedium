import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISticky} from "../../common/ISticky";
import {PostModel} from "../../common/data";
import {PostService} from "../../Services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthServiceService} from "../../Services/auth-service.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, ISticky, OnDestroy {

  data: PostModel;
  userId: string;
  imgSrc: string;
  isFavourite: boolean;
  loginStatus;
  constructor(private postService: PostService, private authService: AuthServiceService,
              private userService: UserService, private route: ActivatedRoute,
              private router: Router) {
    this.userId = sessionStorage.getItem('UID');
    this.isFavourite = false;
    this.imgSrc = "";
  }

  updateFavourite() {
    this.userService.getUserById(this.userId)
      .subscribe(data=>{
        let favourites = data['favourites'];
        let contains = false;
        for(let i = 0; i <favourites.length; ++i) {
          let item = favourites[i];
          if(item['_id'] === this.data._id){
            contains = true;
            break;
          }
        }
        if(contains) {
          this.isFavourite = true;
        } else {
          this.isFavourite = false;
        }
      })
  }

  ngOnInit() {
    this.loginStatus = this.authService.loginStatus.subscribe(value=>{
      if(value) {
        this.userId = sessionStorage.getItem('UID');
        this.updateFavourite();
      } else {
        this.userId = null;
      }
    });
    this.route.paramMap.subscribe(params=>{
      this.postService.getPostById(params.get('id'))
        .subscribe(data=>{
          this.data = <PostModel> data;
          if(! data['_id']) {
            this.router.navigate(['/error404']);
          }
          this.imgSrc = `/public/${this.data.image}`;
          if(this.userId) {
            this.updateFavourite();
          }
        }, err=>{
          this.router.navigate(['/error404']);
        })
    });
  }

  ngOnDestroy(){
    this.loginStatus.unsubscribe();
  }
  needSticky() {
    return true;
  }

  deletePost(){
    this.userService.unPublishPost(this.userId, this.data._id)
      .subscribe(data=>{
        this.router.navigate(['/']);
      });
  }

  addToFavourite() {
    this.userService.addToFavourite(this.userId, this.data._id)
      .subscribe(data => {
        if(data['_id']){
          this.isFavourite = true;
        } else {
          this.isFavourite = false;
        }
      })
  }

  removeFromFavourites() {
    this.userService.removeFromFavourites(this.userId, this.data._id)
      .subscribe(data => {
        if(data['_id']){
          this.isFavourite = false;
        } else {
          this.isFavourite = true;
        }
      })
  }
}
