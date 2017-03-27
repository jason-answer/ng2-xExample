import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes = [
	//{ path: '', redirectTo: 'contact', pathMatch: 'full' },
	{ path: '', redirectTo: './customer/customer.module#CustomerModule', pathMatch: 'full' },
	{ path: 'customers', loadChildren: './customer/customer.module#CustomerModule' },
	{ path: 'employees', loadChildren: './employee/employee.module#EmployeeModule' },
	{ path: 'examples', loadChildren: './example/example.module#ExampleModule' },
	{
		path: '**',//fallback router must in the last
		loadChildren: './customer/customer.module#CustomerModule'
	}
];
