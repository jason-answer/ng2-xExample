import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
       $(function () {
      $('.collapsible').collapsible();
    });
  }

}
