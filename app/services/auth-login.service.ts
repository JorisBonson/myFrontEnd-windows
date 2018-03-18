import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import * as jwt from 'jsonwebtoken';

// iort {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../models/user';

@Injectable()
export class AuthLoginService {
  public token: string;
  private emptyUser = new User();
  private LoggedIn = new   BehaviorSubject<boolean> (false);
  currentLoggedIn = this.LoggedIn.asObservable();
  private currentUser = new BehaviorSubject<User>(this.emptyUser);
  currentUserObserver = this.currentUser.asObservable();





constructor(private http: HttpClient) { }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.changeLoginStatus( false);
    this.changeCurrentUserStatus(this.emptyUser);
  }

  changeLoginStatus( nextLoginStatus: boolean ) {
    this.LoggedIn.next(nextLoginStatus);
    console.log('Current Login status ' + nextLoginStatus);
  }

  changeCurrentUserStatus(nextCurrentUser: User) {this.currentUser.next(nextCurrentUser); }

  login(email: string, password: string) {
    return this.http.post <any>(appConfig.apiUrl + '/api/signin', {email: email, password: password})
      .map(user => {

          console.log('login has fired');

          console.log(user);
          // split  up  token
          const parted = user.token.split(' ');
          const currentUserReturned = jwt.decode(parted[1], appConfig.secret);

          console.log(currentUserReturned);
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(currentUserReturned));
            localStorage.setItem('token', JSON.stringify(user));
            this.changeLoginStatus(true);
            this.changeCurrentUserStatus(currentUserReturned);
            console.log(currentUserReturned)  ;
          }


          return user;
        }
      );
  }










}
