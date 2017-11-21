import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  category: {
    technology: boolean;
    creativity: boolean;
    entrepreneurship: boolean;
  };

  image;

  constructor() {
    this.category = {
      technology: false, creativity: false, entrepreneurship: false
    };
  }

  ngOnInit() {
  }

  showFileSelector() {
    $('#file_upload_input').click();
  }

  onImageChange(event) {
    if(! (event.target.files && event.target.files[0])) {
      return;
    }
    let reader = new FileReader();
    reader.onload = (e:any) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
