import { Component, OnInit, NgModule } from '@angular/core';
import {ViewChild} from '@angular/core';

import { User } from '../models/user';

import {MatMenuTrigger } from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';



import {AuthLoginService} from '../services/auth-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  private _currentUser: User;
  LoggedIn: boolean;
  returnUrl: string;

  constructor(private  authService: AuthLoginService, private  router: Router,  private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {

      this._currentUser = JSON.parse(localStorage.getItem('_currentUser'));
      console.log(this._currentUser);
      this.authService.currentLoggedIn.subscribe(LoggedIn  => this.LoggedIn = LoggedIn);
      this.authService.currentUserObserver.subscribe (currentUser => this._currentUser = currentUser);
      // noinspection JSIgnoredPromiseFromCall

  }
}
