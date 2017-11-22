import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthServiceService {

  private API_URL = 'http://localhost:3000/api';
  loginStatus: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.getLoggedInUser().subscribe(data => {
      if(data['_id']){
        this.loginStatus.emit(true);
      }else{
        this.loginStatus.emit(false);
      }
    })
  }


  public loginUser(username, password, success, error) {
    this.http.post(`${this.API_URL}/login`,
      {username:username,password:password} )
      .subscribe(data => {
        if(data['_id']){
          success(data);
          this.loginStatus.emit(true);
        }else {
          error(data['message']);
          this.loginStatus.emit(false);
        }
      });
  }

  public registerUser(fullName, username, password, success, error) {
    this.http.post(`${this.API_URL}/register`,
      {
        name: fullName,
        username: username,
        password: password
      }).subscribe(data => {
      if(data['_id']) {
        success(data);
        this.loginStatus.emit(true);
      } else {
        error(data['message']);
        this.loginStatus.emit(false);
      }
    });
  }

  public logoutUser() {
    this.http.get(`${this.API_URL}/logout`)
      .subscribe(data => {
        if(data && data['success']) {
          this.loginStatus.emit(false);
        }else{
          this.loginStatus.emit(true);
        }
      });
  }

  public getLoggedInUser(){
    return this.http.get(`${this.API_URL}/loginStatus`);
  }
}
