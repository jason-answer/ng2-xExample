import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { CustomerProfileEditComponent } from '../../customer-profile-edit/customer-profile-edit.component';
import { OfferEditComponent } from '../../offer/offer-edit/offer-edit.component';
import { OfferListComponent } from '../../offer/offer-list/offer-list.component';
import { OfferViewComponent } from '../../offer/offer-view/offer-view.component';
import { ContractEditComponent } from '../../contract/contract-edit/contract-edit.component';
import { ContractListComponent } from '../../contract/contract-list/contract-list.component';
import { ContractViewComponent } from '../../contract/contract-view/contract-view.component';
import { InquriyViewComponent } from '../inquriy-view/inquriy-view.component';
import { InquriyListComponent } from '../inquriy-list/inquriy-list.component';
import { CustomerProfileComponent } from '../../customer-profile/customer-profile.component';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { CustomerComponent } from '../../customer.component';
import { CustomerRoutingModule } from '../../customer-routing.module';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquriyEditComponent } from './inquriy-edit.component';

describe('InquriyEditComponent', () => {
  let component: InquriyEditComponent;
  let fixture: ComponentFixture<InquriyEditComponent>;
const appRoutes = [

    {
      path: '',
      component: InquriyEditComponent
    },
    {
      path: '**',//fallback router must in the last
      component: InquriyEditComponent
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       declarations: [
        InquriyEditComponent
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
    fixture = TestBed.createComponent(InquriyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
