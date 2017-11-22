import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthServiceService {

  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  public loginUser(username, password) {
    return this.http.post(`${this.API_URL}/login`,
      {username:username,password:password} )
  }

  public registerUser(fullName, username, password) {
    return this.http.post(`${this.API_URL}/register`,
      {
        name: fullName,
        username: username,
        password: password
      })
  }

  public logoutUser() {
    return this.http.get(`${this.API_URL}/logout`);
  }

  public isLoggedIn(){
    return this.http.get(`${this.API_URL}/loginStatus`);
  }
}
