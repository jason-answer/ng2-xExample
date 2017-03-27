import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { User } from '../../misc/model/user.model';
// Crazy copy of the app/user.service
// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern
//
// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable, Optional } from '@angular/core';


export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  private _userName = 'Sherlock Holmes';
  public userLoginURL = 'src/mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();
  constructor( @Optional() config: UserServiceConfig, public http: Http) {
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    return this._userName;
  }
  /**
   * get current login user.
   */
  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  /**
   * 
   * @param user 
   */
  public login(user: User) {
    return this.http
      .get(this.userLoginURL)
      .map((response: Response) => {
        let user = response.json();
        console.log("user object>" + user);
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        }
        return response;
      })
      .subscribe(
      data => {
        console.log("login success>" + data);
      },
      error => {
        console.error(error);
      }
      );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    //this.toasterService.showToaster('error', 'Oops!! An error occurred', error);
    //this.loaderService.displayLoader(false);
    return Promise.reject(error.message || error);
  }


  public count: number = 0;
  /**
   * Use Promise get service 
   * @param user 
   */
  public loginPromise(user: User): Promise<any> {
    console.log("execute count :" + this.count++);

    return this.http
      .get(this.userLoginURL)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/