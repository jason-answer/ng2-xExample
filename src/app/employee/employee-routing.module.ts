import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { EmployeeComponent } from './employee.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile-edit/employee-profile-edit.component'

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            { path: '', component: EmployeeListComponent },
            { path: ':id', component: EmployeeProfileComponent },
            { path: ':id/edit', component: EmployeeProfileEditComponent }
        ]
    }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
