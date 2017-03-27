import { Observable } from 'rxjs/Rx';
import { Customer } from '../model/customer.model';
import { error } from 'util';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

public customers: Array<Customer>;
  userName = '';
  subtitle = 'Design';
  public id: string;
  constructor(public activeRoute: ActivatedRoute, userService: UserService, public customerService: CustomerService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.id = params["id"];
         this.getCustomerList(this.id);
      }
    );
  }

  public getCustomerList(customerId: string) {
    this.customerService.getCustomerList(customerId)
    .subscribe(
      data => {
        console.log(data);
        this.customers =data["items"];
       }, error => console.log(error)
    );

 
  }

}
