import { CoreModule } from '../../core/core.module';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileComponent } from './customer-profile.component';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;
const appRoutes = [

    {
      path: '',
      component: CustomerProfileComponent
    },
    {
      path: '**',//fallback router must in the last
      component: CustomerProfileComponent
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerProfileComponent
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
