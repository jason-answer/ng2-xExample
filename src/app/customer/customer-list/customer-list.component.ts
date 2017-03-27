import { Component, OnInit } from '@angular/core';
import { RepeatPipe } from 'ngx-pipes/src/app/pipes/string/repeat';

@Component({
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [RepeatPipe]
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
