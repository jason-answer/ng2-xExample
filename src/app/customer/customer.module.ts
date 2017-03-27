import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './services/customer.service';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**customer profile */
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';
/**inquriy */
import { InquriyEditComponent } from './inquriy/inquriy-edit/inquriy-edit.component';
import { InquriyViewComponent } from './inquriy/inquriy-view/inquriy-view.component';
import { InquriyListComponent } from './inquriy/inquriy-list/inquriy-list.component';
/**contract */
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractViewComponent } from './contract/contract-view/contract-view.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
/**offer */
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { OfferEditComponent } from './offer/offer-edit/offer-edit.component';
import { OfferViewComponent } from './offer/offer-view/offer-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
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
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
