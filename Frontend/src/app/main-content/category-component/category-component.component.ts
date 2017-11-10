import { Component, OnInit, Input } from '@angular/core';
import {DataModel} from '../../common/data';
import {ISticky} from "../../common/ISticky";

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit, ISticky {
  @Input() category: string;
  data: DataModel[];
  renderData: any[];
  constructor() {
    this.data = [
      {
        title: `To Grow Talent, Don’t Move Fast and Break Things — Move Slow and Build Them`,
        authorName: `Alida Miranda-Wolff`,
        content: `This is part one in a new series on culture-building, talent attraction and retention, and organizational development in technology companies.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1600/1*1Wr_qMieyYWEYedXXilyKg.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `How Grammarly Quietly Grew Its Way to 6.9 Million Daily Users in 9 Years`,
        authorName: `Hiten Shah`,
        content: `Since 2008, Grammarly has quietly grown one of the most successful self-funded products on the web.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1250/1*wbS5PsJHzQky215r3BBZkQ.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `What Tesla’s Model 3 UI Reveals About Its Vision for the Future`,
        authorName: `Tom Johnson`,
        content: `If you’re a designer/car enthusiast this post is for you. I’ve broken down the details of the dashboard controls and interface of the Tesla Model 3, the first mass-market, touchscreen only electric car.`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*jOmqL305XiH0Rvj_gabASg.png`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `Creative People Won’t Survive the Future Without Doing These 3 Things`,
        authorName: `Todd Brison`,
        content: `The writing is on the wall.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1250/1*8De5D7uFtJWwkCbSzM_A_Q.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }];
    const technologyData = [
      {
        title: `Looking After Number One-forty`,
        authorName: `Josh Wilburne`,
        content: `Solving a number of design challenges`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*_pTkM0aRFYezsxMAxoxS2A.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `Waymo’s fully self-driving vehicles are here`,
        authorName: `Waymo Team`,
        content: `With Waymo in the driver’s seat, fully self-driving vehicles can transform the way we get around`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*wEycvtqZGvGbTiHP17qUfg.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `What Tesla’s Model 3 UI Reveals About Its Vision for the Future`,
        authorName: `Tom Johnson`,
        content: `If you’re a designer/car enthusiast this post is for you. I’ve broken down the details of the dashboard controls and interface of the Tesla Model 3, the first mass-market, touchscreen only electric car.`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*jOmqL305XiH0Rvj_gabASg.png`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `6 tech companies that aren’t evil`,
        authorName: `Ben Wolfard`,
        content: `You can (mostly) survive without Google, Facebook, PayPal and the others. Here are the pros and cons of the alternatives.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1000/1*OaV1SJ_7u70Vrc57an9kYg.png`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `Forking The iPhone`,
        authorName: `Jean-Louis Gassée`,
        content: `After the early fast growth iPhone years, Apple appeared to stumble. Profit and revenue began to fall starting in 2013. Now, a bold bet, the iPhone X, covered by the iPhone 8, appears on the verge of paying off.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1600/1*AAr1o6T8z3cANSGgljTjjw.png`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }];
    const creativeData = [
      {
        title: `8 Habits Every Creative Should Have: An Illustrated Guide!`,
        authorName: `Threadless`,
        content: `In a perfect world, we would all have time to practice our creative craft every day without ever getting artist’s block`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*Hvp-eIv3fj-WGpY_ouLIJA.png`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `How I Got Past Writer’s Block With Yoga`,
        authorName: `Dani Fankhauser`,
        content: `In January 2017, I set a goal for myself. For as long as I can remember, I’ve wanted to write books. I decided that this year, I would not only write a book, but also publish it.`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*KSc6BT3LcOq5hxCXOch0aw.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `The river of creativity is always flowing`,
        authorName: `Susan Brassfield Cogan`,
        content: `The miracle of always more`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*_H-lDHRqTZODo19Z2Qn--Q.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `How To Develop Your Creative Thinking`,
        authorName: `Nicky Blue`,
        content: `“Every child is an artist, the problem is staying an artist when you grow up.”`,
        imgUrl: `https://cdn-images-1.medium.com/max/1000/1*taeuBuWsE4dFkfw8PfVRLQ.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `What Is The Real Reason Why You Write?`,
        authorName: `Paul Cantor`,
        content: `For years, I often struggled telling people why, exactly, I wrote.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1000/1*2L9guCqnZBpwm4GvDEPdng.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }];
    const entreData = [
      {
        title: `The problem with telling music school grads to ‘be entrepreneurial’`,
        authorName: `Threadless`,
        content: `I lived in a box for four years. Chaos of this world, a little practice room with stained carpet and decades-old curtains and unflattering light was my haven. The is where I had my `,
        imgUrl: `https://cdn-images-1.medium.com/max/750/1*trdnBH20z0ppQA87O_DGbA.gif`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `How I Got Past Writer’s Block With Yoga`,
        authorName: `Dani Fankhauser`,
        content: `In January 2017, I set a goal for myself. For as long as I can remember, I’ve wanted to write books. I decided that this year, I would not only write a book, but also publish it.`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*KSc6BT3LcOq5hxCXOch0aw.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `The river of creativity is always flowing`,
        authorName: `Susan Brassfield Cogan`,
        content: `The miracle of always more`,
        imgUrl: `https://cdn-images-1.medium.com/max/2000/1*_H-lDHRqTZODo19Z2Qn--Q.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `How To Develop Your Creative Thinking`,
        authorName: `Nicky Blue`,
        content: `“Every child is an artist, the problem is staying an artist when you grow up.”`,
        imgUrl: `https://cdn-images-1.medium.com/max/1000/1*taeuBuWsE4dFkfw8PfVRLQ.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }, {
        title: `What Is The Real Reason Why You Write?`,
        authorName: `Paul Cantor`,
        content: `For years, I often struggled telling people why, exactly, I wrote.`,
        imgUrl: `https://cdn-images-1.medium.com/max/1000/1*2L9guCqnZBpwm4GvDEPdng.jpeg`,
        ratings: 0,
        publishDate: '0',
        id: '0'
      }];
    this.data = this.data.concat(technologyData).concat(creativeData).concat(entreData);
  }

  setRenderData() {
    this.renderData = []
    let type = 0;
    for (let i = 0; i < this.data.length;) {
      const currentData: DataModel[] = [];
      const remaining = this.data.length - i;
      if (remaining < 5 || type === 0) {
        for (let j = 0; j < 4 && i < this.data.length; ++j) {
          currentData.push(this.data[i]);
          ++i;
        }
      } else if (type === 1) {
        for (let j = 0; j < 5 && i < this.data.length; ++j) {
          currentData.push(this.data[i]);
          ++i;
        }
      }
      this.renderData.push({type: type, data: currentData});
      if (type === 0) {
        type = 1;
      } else {
        type = 0;
      }
    }
  }
  ngOnInit() {
    this.setRenderData();
  }

  needSticky() {
    return false;
  }
}
