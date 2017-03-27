import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-parameter',
  templateUrl: './router-parameter.component.html',
  styleUrls: ['./router-parameter.component.css']
})
export class RouterParameterComponent implements OnInit {

  constructor(public activeRoute: ActivatedRoute) { }

  public param: string;
  public optionalParam: string;
  ngOnInit() {

     this.activeRoute.params.subscribe(
        params => {
          this.param = params["param"];
          this.optionalParam = params["foo"];
        }
      );


  }

}
