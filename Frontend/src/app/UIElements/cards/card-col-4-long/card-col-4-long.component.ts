import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PostModel} from "../../../common/data";

@Component({
  selector: 'app-card-col-4-long',
  templateUrl: './card-col-4-long.component.html',
  styleUrls: ['./card-col-4-long.component.css']
})
export class CardCol4LongComponent implements OnInit {
  @Input() data: PostModel;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  imgUrl: string;
  formattedDate = '13 Dec';

  ngOnInit() {
    this.imgUrl = `url('/public/${this.data.image}')`;
    console.log(this.imgUrl);
  }
}
