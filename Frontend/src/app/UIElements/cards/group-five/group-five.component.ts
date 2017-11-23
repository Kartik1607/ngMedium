import { Component, OnInit, Input } from '@angular/core';
import {PostModel} from '../../../common/data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-five',
  templateUrl: './group-five.component.html',
  styleUrls: ['./group-five.component.css']
})
export class GroupFiveComponent implements OnInit {

  @Input() data: PostModel[]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showPost(postId) {
    this.router.navigate(['/posts',postId])
  }
}
