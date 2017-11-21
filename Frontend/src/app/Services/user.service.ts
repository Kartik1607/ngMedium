import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  private API_URL = 'http://localhost:3000';
  private data:{
    loginStatus: boolean,
    userId?: string,
    userName?: string
  };
  constructor(private http: HttpClient) {
    this.data = {
      loginStatus: false
    };
    this.isUserLoggedIn();
  }

  public getData() {
    return this.data;
  }

  public isUserLoggedIn() {
    const uid = localStorage.getItem('UID');
    if ( uid ) {
      this.data.loginStatus = true;
      this.updateData(uid);
    } else {
      this.data.loginStatus = false;
    }
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
    if (status ) {
      localStorage.setItem('UID', uid);
      this.data.loginStatus = true;
      this.updateData(uid);
    } else {
      localStorage.removeItem('UID');
      this.data.loginStatus = false;
    }
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
}
