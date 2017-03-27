import { RouterModule } from '@angular/router';
import { OfferViewComponent } from './offer/offer-view/offer-view.component';
import { OfferEditComponent } from './offer/offer-edit/offer-edit.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { ContractViewComponent } from './contract/contract-view/contract-view.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { InquriyListComponent } from './inquriy/inquriy-list/inquriy-list.component';
import { InquriyViewComponent } from './inquriy/inquriy-view/inquriy-view.component';
import { InquriyEditComponent } from './inquriy/inquriy-edit/inquriy-edit.component';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  const appRoutes = [

    {
      path: '',
      component: CustomerComponent
    },
    {
      path: '**',//fallback router must in the last
      component: CustomerComponent
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        /**customer main */
        CustomerComponent,
        /**customer profile */
        CustomerListComponent,
        CustomerProfileComponent,
        CustomerProfileEditComponent,
        /**inquriy */
        InquriyEditComponent,
        InquriyViewComponent,
        InquriyListComponent,
        /**contract */
        ContractListComponent,
        ContractViewComponent,
        ContractEditComponent,

        /**offer */
        OfferListComponent,
        OfferEditComponent,
        OfferViewComponent
      ]
      ,providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
