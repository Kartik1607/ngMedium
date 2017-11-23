import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISticky} from "../../common/ISticky";
import {PostModel} from "../../common/data";
import {PostService} from "../../Services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthServiceService} from "../../Services/auth-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, ISticky, OnDestroy {

  data: PostModel;
  userId: string;
  imgSrc: string;
  loginStatus;
  constructor(private postService: PostService, private authService: AuthServiceService,
              private route: ActivatedRoute, private router: Router) {
    this.userId = sessionStorage.getItem('UID');
    this.imgSrc = "";
  }

  ngOnInit() {
    this.loginStatus = this.authService.loginStatus.subscribe(value=>{
      if(value) {
        this.userId = sessionStorage.getItem('UID');
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

  }

  addToFavourite() {

  }
}
