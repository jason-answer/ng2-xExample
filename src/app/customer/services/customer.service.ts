import { Customer } from '../model/customer.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CustomerService
{
    public customerListURL = "src/mock-data/customer-mock.json";


    constructor(public http: Http) { }

    public getCustomerList(customerId: string):Observable<Customer[]>{
        return this.http.get(this.customerListURL)
            .map((res: Response) => res.json())
    }
}