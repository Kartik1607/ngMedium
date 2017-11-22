import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{

  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

}
