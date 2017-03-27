import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';

import { InquriyListComponent} from './inquriy/inquriy-list/inquriy-list.component';
import { InquriyViewComponent} from './inquriy/inquriy-view/inquriy-view.component';
import { InquriyEditComponent} from './inquriy/inquriy-edit/inquriy-edit.component';

import { ContractListComponent} from './contract/contract-list/contract-list.component';
import { ContractViewComponent} from './contract/contract-view/contract-view.component';
import { ContractEditComponent} from './contract/contract-edit/contract-edit.component';

import { OfferListComponent} from './offer/offer-list/offer-list.component';
import { OfferViewComponent} from './offer/offer-view/offer-view.component';
import { OfferEditComponent} from './offer/offer-edit/offer-edit.component';
const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: '', component: CustomerListComponent },
            {
                path: ':id', component: CustomerProfileComponent,
                children: [
                    /** inquriys */
                    { path: 'inquriys', component: InquriyListComponent },
                    { path: 'inquriys/:id', component: InquriyViewComponent },
                    { path: 'inquriys/:id/edit', component: InquriyEditComponent },
                    /** contract */
                    { path: 'contracts', component: ContractListComponent },
                    { path: 'contracts/:id', component: ContractViewComponent },
                    { path: 'contracts/:id/edit', component: ContractEditComponent },

                     /** offer */
                    { path: 'offers', component: OfferListComponent },
                    { path: 'offers/:id', component: OfferViewComponent },
                    { path: 'offers/:id/edit', component: OfferEditComponent },
                ]
            },
            { path: ':id/edit', component: CustomerProfileEditComponent,}
            ,
            { path: 'inquriy', component: InquriyListComponent },
            { path: 'assessment', component: InquriyListComponent },
            { path: 'offer', component: InquriyListComponent },
            { path: 'program-profile', component: InquriyListComponent },
            { path: 'program-Progress', component: InquriyListComponent },
            { path: 'schedule-list', component: InquriyListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/