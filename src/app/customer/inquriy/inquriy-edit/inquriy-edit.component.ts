import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquriy-edit',
  templateUrl: './inquriy-edit.component.html',
  styleUrls: ['./inquriy-edit.component.css']
})
export class InquriyEditComponent implements OnInit {

  public id: string;
  public customer_id: string;
  public inquriy_optional_id: string;
  constructor(public activeRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    if (this.activeRoute.parent != null) {
      console.log(this.activeRoute.parent);
       this.activeRoute.parent.params.subscribe(parent_params => {
        this.customer_id = parent_params['id'];
        console.log("customer id is " + parent_params['id']);
      });
      this.activeRoute.params.subscribe(
        params => {
          this.id = params["id"];
          this.inquriy_optional_id = params["foo"];
          console.log("customer_id:" + this.customer_id);
        }
      );
    }
  }


}
