import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHeaderSticky: boolean;

  constructor() {
    this.isHeaderSticky = true;
  }

  componentAdded(event) {
    console.log(event);
    this.isHeaderSticky = event.needSticky();
  }
}
