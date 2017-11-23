import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PostModel} from '../../../common/data';

@Component({
  selector: 'app-card-col-6',
  templateUrl: './card-col-6.component.html',
  styleUrls: ['./card-col-6.component.css']
})
export class CardCol6Component implements OnInit {
  @Input() data: PostModel;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  imgUrl: string;
  formattedDate: string;
  constructor() {}

  private  getBackgroundImage(name: string): string {
    return `url('/public/${name}')`;
  }

  private formatDate(date: string): string{
    return '7 Nov';
  }

  ngOnInit() {
    this.imgUrl = this.getBackgroundImage(this.data.image);
    this.formattedDate = this.formatDate(this.data.date);
  }

}
