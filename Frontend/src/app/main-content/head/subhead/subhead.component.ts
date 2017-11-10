import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subhead',
  templateUrl: './subhead.component.html',
  styleUrls: ['./subhead.component.css']
})
export class SubheadComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
