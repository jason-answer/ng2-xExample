import { User } from '../model/user.model';
import { ToastsManager } from 'ng2-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Component, ElementRef, OnInit, Renderer, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public currentUser: User;
  constructor(
    public userLoginService: UserService,
    public renderer: Renderer,
    public elementRef: ElementRef,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.userLoginService.currentUser
      .subscribe(
      data => {
        this.currentUser = data;
        this.user=data;
        
      },
      error => console.error(error)
      );
  }


/**
 * User login
 */
  public onLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user)
  }

}
