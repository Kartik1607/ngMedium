import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-col-6',
  templateUrl: './card-col-6.component.html',
  styleUrls: ['./card-col-6.component.css']
})
export class CardCol6Component implements OnInit {
  heading: string;
  imgUrl: string;
  subHeading: string;
  constructor() {
    this.heading = 'Thus Spoke Zarathustra” by Friedrich Nietzsche';
    this.imgUrl = this.getBackgroundImage(
      'https://cdn-images-1.medium.com/max/2000/1*v82vpkP70oqPupKuTolNdg.png');
    this.subHeading = `Part 4 in Arc’s series: The Greatest Works In Philosophy`;
  }

  private  getBackgroundImage(url: string): string {
    return `url(${url})`;
  }
  ngOnInit() {
  }

}
