import {Component, OnInit} from '@angular/core';
import {ISticky} from "../../common/ISticky";
import {PostModel} from "../../common/data";
import {PostService} from "../../Services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, ISticky {

  data: PostModel;
  imgSrc: string;
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.imgSrc = "";
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.postService.getPostById(params.get('id'))
        .subscribe(data=>{
          this.data = <PostModel> data;
          this.imgSrc = `/public/${this.data.image}`;
        })
    });
  }

  needSticky() {
    return true;
  }

}
