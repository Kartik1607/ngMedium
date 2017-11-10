import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from "../../common/data";

@Component({
  selector: 'app-card-col-4-long',
  templateUrl: './card-col-4-long.component.html',
  styleUrls: ['./card-col-4-long.component.css']
})
export class CardCol4LongComponent implements OnInit {
  @Input() data: DataModel;
  imgUrl: string;
  timeToRead = '7 min read';
  formattedDate = '13 Dec';
  constructor() {}

  ngOnInit() {
    this.imgUrl = `url(${this.data.imgUrl})`;
  }

}
