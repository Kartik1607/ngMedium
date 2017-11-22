import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostService {
  API_URL = '/api'

  constructor(private http: HttpClient) { }

  savePost(userId, title, content, category, image) {
    return new Promise((resolve) => {
      this.uploadImage(image)
        .then(imgName=>{
          const payLoad = {
            title: title,
            category: category,
            content: content,
            image: imgName,
            user: userId
          };
          this.http.post(`${this.API_URL}/posts`, payLoad)
            .subscribe(result => {
              resolve(result);
            });
        })
    });
  }

  uploadImage(image) {
    return new Promise((resolve, reject) => {
      if(!image) {
        resolve('placeholder.png');
      }
      const imgData = new FormData();
      imgData.set('avatar', image);
      this.http.post(`${this.API_URL}/upload`, imgData)
        .subscribe(data => {
          if(data['filename']) {
            resolve(data['filename']);
          } else {
            reject('ERROR');
          }
        })
    });
  }
}
