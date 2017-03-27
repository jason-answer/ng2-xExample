import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
/**employee profile */
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile-edit/employee-profile-edit.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [
    /**employee main */
    EmployeeComponent,
    /**employee profile */
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeProfileEditComponent]
})
export class EmployeeModule { }
