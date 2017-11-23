import { Component, OnInit, Input } from '@angular/core';
import {PostModel} from '../../../common/data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-four',
  templateUrl: './group-four.component.html',
  styleUrls: ['./group-four.component.css']
})
export class GroupFourComponent implements OnInit {

  @Input() data: PostModel[]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showPost(postId) {
    this.router.navigate(['/posts',postId])
  }
}
