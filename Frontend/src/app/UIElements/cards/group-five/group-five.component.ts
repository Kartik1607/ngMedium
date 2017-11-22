import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from '../../../common/data';

@Component({
  selector: 'app-group-five',
  templateUrl: './group-five.component.html',
  styleUrls: ['./group-five.component.css']
})
export class GroupFiveComponent implements OnInit {

  @Input() data: DataModel[]
  constructor() { }

  ngOnInit() {
  }

}
