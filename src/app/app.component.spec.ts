import { CustomerComponent } from './customer/customer.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  const appRoutes = [
    {
      path: '',
      component: AppComponent
    },
    {
      path: '**',//fallback router must in the last
      component: AppComponent
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [

        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule.forRoot({ userName: 'Miss Marple' }),
        RouterModule.forRoot(appRoutes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
