import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../example.service'

@Component({
  selector: 'app-service-promise',
  templateUrl: './service-promise.component.html',
  styleUrls: ['./service-promise.component.css']
})
export class ServicePromiseComponent implements OnInit {


  private promiseData: any;
  private promiseSequenceData: any;
  constructor(public http: Http, public exampleService: ExampleService) { }

  ngOnInit() {
  }

  getPromiseDataBasic() {
    this.promiseData = this.exampleService.getPromiseData("First Call");
  }

  getPromiseDataBySequence() {

    this.promiseSequenceData = this.exampleService.getDataMethod1()
      .toPromise()
      /** For then Method, that parameter must be used ()=>{a.Name=sdfds} arrow function,
       * Otherwise,the called method will not be able to read any property for "this" key word.
       */
      .then((result: Response) => {
        return this.exampleService.getDataMethod2(result).toPromise();
      })
      .then((result: Response) => {
        return this.exampleService.getDataMethod3(result).toPromise();
      })
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

}
