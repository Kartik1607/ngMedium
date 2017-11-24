import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PostModel} from "../../../common/data";

@Component({
  selector: 'app-card-col-4-small',
  templateUrl: './card-col-4-small.component.html',
  styleUrls: ['./card-col-4-small.component.css']
})
export class CardCol4SmallComponent implements OnInit {
  @Input() data: PostModel;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  imgUrl: string;
  formattedDate = '13 Dec';
  constructor() {}

  ngOnInit() {
    this.imgUrl = `url('${this.data.image}')`;
  }
}
