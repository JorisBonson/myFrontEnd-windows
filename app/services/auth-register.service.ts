import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { User } from '../models/user';

@Injectable()
export class AuthRegisterService {
  constructor(private http: HttpClient) { }
  create(user: User) {
    console.log(user);
    return this.http.post(appConfig.apiUrl + '/api/signup', user);

  }

}
