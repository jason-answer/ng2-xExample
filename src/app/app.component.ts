import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from './misc/model/user.model';
import { UserService } from './core/services/user.service';
import { Component, ElementRef, OnInit, Renderer, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subtitle = 'Design';
  public user: User = new User();
  public currentUser: User;
  private globalClickCallbackFn: Function;
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
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("Gloab Listen Click Envent>" + event);
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser
      .subscribe(
      data => {
        this.currentUser = data;
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);

        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        // if (routerStateSnapshot.url.indexOf("/login") != -1) {
        //   this.router.navigateByUrl("/home");
        // }
      },
      error => console.error(error)
      );

    //this.translate.addLangs(["zh", "en"]);
    //this.translate.setDefaultLang('zh');

    //const browserLang = this.translate.getBrowserLang();
    //console.log("检测到的浏览器语言>" + browserLang);
    //this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

 

  public onLogout(): void {
    this.user = Object.assign({});
    this.userLoginService.logout();
    this.toastr.success("Logout successssssss ssssssss sssssssssss sssssssss ssssssssssss sss ssssss sssss sssssss ssss ssss!", "Alert",{showCloseButton:true});
    //this.toastr.custom('<div class="purple darken-3"><div class="col m3">ssssssss    </div>    <div class="col m9">ssfsfsdfsdfdsfsdf    </div></div>', "dsfdsfsdfsdf", { dismiss:"click", animate: 'flyRight', enableHTML: true });
    //this.toastr.success('You are awesome! <span style="color: red">Message in red.</span>', 'Success!', {dismiss: 'click',animate:'flyRight',enableHTML:true});
  }

}


