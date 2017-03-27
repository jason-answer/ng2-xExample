import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

  constructor(public http: Http) { }

  getPromiseData(result: any) {
    console.log(result);
    let url = "/api/Service1/GetDataTT?str=222&value=24444"
    return this.http.get(url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  getDataMethod1() {
    console.log("First Service.");
    let url = "/api//Service1/GetData?value=9999";
    return this.http.get(url)
  }

  getDataMethod2(result: any) {
    console.log("Second Service.");
    let url = "/api/Service1/GetDataTT?str=222&value=24444";
    return this.http.get(url);
  }
  getDataMethod3(result: any) {
    console.log("Third Service.");
    let url = "/api//Service1/GetData?value=9999";
    return this.http.get(url);
  }

  private getSucess(result: any) {
    console.log(result);
    console.log("Get Service Final Result.");
    return result;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}
