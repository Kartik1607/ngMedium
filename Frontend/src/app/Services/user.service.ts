import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{


  private API_URL = 'http:localhost:3000/api';
  private data:{
    loginStatus: boolean,
    userId?: string,
    userName?: string
  };
  constructor(private http: HttpClient) {
    this.data = {
      loginStatus: false
    };
  }

  public getData() {
    return this.data;
  }

  public isUserLoggedIn() {
    this.http.get('/login/')
  }

  private updateData(uid) {
    this.getUserById(uid).subscribe((data)=>{
      this.data.userId = uid;
      this.data.userName = data['name'];
    });
  }

  public getUserById(uid) {
    return this.http.get(`${this.API_URL}/users/${uid}`);
  }

  public setLoggedInStatus(status: boolean, uid?) {

  }

  public loginUser(username, password) {
    return this.http.post(`${this.API_URL}/login`,
      {userName:username,password:password} )
  }

  public registerUser(fullName, userName, password) {
    return this.http.post(`${this.API_URL}/users`,
      {
        name: fullName,
        userName: userName,
        password: password
      })
  }

  public logout() {

  }
}
