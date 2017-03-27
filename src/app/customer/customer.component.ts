import { AfterViewInit, Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {

  constructor() { 
    
  }

  ngAfterViewInit() {
    $(function () {
      $('.collapsible').collapsible();
    });

  }

}
