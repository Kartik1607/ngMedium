import { Component, OnInit } from '@angular/core';
import {DataModel} from "../common/data";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  data: DataModel[];

  constructor() {
    this.data = [{
      id: '1',
      title: `Automation and the “Creation of a New World”`,
      content: `Why “Think Different” is Necessary in a Digital Age`,
      imgUrl: `https://cdn-images-1.medium.com/max/2000/1*impa6weEt2uqre4CJn9Zmg.jpeg`,
      publishDate: ' ',
      ratings: 0,
      authorName: `Erik P.M. Vermeulen`
    }, {
      id: '1',
      title: `A day with iPhone X`,
      content: `In 2007 Apple reinvented the phone. Ten years later they’ve reimagined the iPhone.`,
      imgUrl: `https://cdn-images-1.medium.com/max/1000/1*PbRfrNzllex4in-CU542Pg@2x.jpeg`,
      publishDate: ' ',
      ratings: 0,
      authorName: `Weston Girot`
    }, {
      id: '1',
      title: `Forget the South China Sea — data has become the new battleground`,
      content: `She realised that this new phenomenon was linked to a form of Russian information warfare.`,
      imgUrl: `https://cdn-images-1.medium.com/max/1000/1*pBaiHj39xHL_HnNndJq_GA.jpeg`,
      publishDate: ' ',
      ratings: 0,
      authorName: `James Eagle`
    }];
  }

  ngOnInit() {
  }

}
