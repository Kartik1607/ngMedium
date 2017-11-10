import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from '../../common/data';

@Component({
  selector: 'app-group-four',
  templateUrl: './group-four.component.html',
  styleUrls: ['./group-four.component.css']
})
export class GroupFourComponent implements OnInit {

  @Input() data: DataModel[]
  constructor() { }

  ngOnInit() {
  }

}
