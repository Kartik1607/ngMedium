import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ISticky} from "../../common/ISticky";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, ISticky {

  constructor() { }

  ngOnInit() {
  }

  needSticky() {
    return true;
  }

}
