import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from '../../common/data';

@Component({
  selector: 'app-card-col-6',
  templateUrl: './card-col-6.component.html',
  styleUrls: ['./card-col-6.component.css']
})
export class CardCol6Component implements OnInit {
  @Input() data: DataModel;
  imgUrl: string;
  formattedDate: string;
  timeToRead: string;
  constructor() {}

  private  getBackgroundImage(url: string): string {
    return `url(${url})`;
  }

  private formatDate(date: string): string{
    return '7 Nov';
  }

  private getTimeToRead(content: string): string {
    return '7 min read';
  }
  ngOnInit() {
    this.imgUrl = this.getBackgroundImage(this.data.imgUrl);
    this.formattedDate = this.formatDate(this.data.publishDate);
    this.timeToRead = this.getTimeToRead(this.data.content);
  }

}
