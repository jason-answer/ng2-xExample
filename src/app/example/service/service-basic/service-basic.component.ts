import { Component, OnInit } from '@angular/core';

import { Headers, Http, Jsonp, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-service-basic',
  templateUrl: './service-basic.component.html',
  styleUrls: ['./service-basic.component.css']
})
export class ServiceBasicComponent implements OnInit {

  getResult: any;
  proxyGetResult: any;
  proxyPostResult: any;

  constructor(public http: Http, public jsonp: Jsonp) { }

  ngOnInit() {

  }


  callJsonpService() {

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    let header = new Headers();
    header.set("LCName", "ssdfsdfdsf");

    var json = this.jsonp.get('http://localhost:62915/Service1/GetDataTT?str=222&value=24444', { headers: header, search: params }).
      map((res: Response) => res.json()).subscribe(

      data => {
        console.log(data);
        this.getResult = data;
      }, error => console.log(error)
      );
    console.log(json);

  }



  proxyGetCallService() {
    let url = "/api/Service1/GetDataTT?str=222&value=24444"
    this.http.get(url).map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
        this.proxyGetResult = data;
      }, error => console.log(error));

  }

  proxyPostCallService() {
    let url = "/api/Service1/GetDataUsingDataContract"
    let body = {
      "BoolValue": true,
      "StringValue": "string",
      "Test": "f27052f2-6097-4bcd-bbd6-1f0c9e494ea0"
    };
    this.http.post(url, body).map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
        this.proxyPostResult = data;
      }, error => console.log(error));

  }

}
