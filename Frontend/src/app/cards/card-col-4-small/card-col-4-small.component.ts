import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from "../../common/data";

@Component({
  selector: 'app-card-col-4-small',
  templateUrl: './card-col-4-small.component.html',
  styleUrls: ['./card-col-4-small.component.css']
})
export class CardCol4SmallComponent implements OnInit {
  @Input() data: DataModel;
  imgUrl: string;
  timeToRead = '7 min read';
  formattedDate = '13 Dec';
  constructor() {}

  ngOnInit() {
    this.imgUrl = `url(${this.data.imgUrl})`;
  }
}
