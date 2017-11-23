import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{

  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  public getUserById(uid) {
    return this.http.get(`${this.API_URL}/users/${uid}`);
  }

  public addToFavourite(uid, pid) {
    return this.http.put(`${this.API_URL}/users/${uid}/favourites/${pid}`, null);
  }

  public removeFromFavourites(uid, pid) {
    return this.http.delete(`${this.API_URL}/users/${uid}/favourites/${pid}`);
  }

  public unPublishPost(uid, pid) {
    return this.http.delete(`${this.API_URL}/users/${uid}/posts/${pid}`);
  }
}
