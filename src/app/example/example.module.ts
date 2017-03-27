import { ServiceBasicComponent } from './service/service-basic/service-basic.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from '../example/example-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringPipeComponent } from './pipes/string-pipe/string-pipe.component';
import { ArrayPipeComponent } from './pipes/array-pipe/array-pipe.component';
import { ObjectPipeComponent } from './pipes/object-pipe/object-pipe.component';
import { MathPipeComponent } from './pipes/math-pipe/math-pipe.component';
import { BooleanPipeComponent } from './pipes/boolean-pipe/boolean-pipe.component';
import { RouterGuardComponent } from './router/router-guard/router-guard.component';
import { RouterParameterComponent } from './router/router-parameter/router-parameter.component';
import { RouterBasicComponent } from './router/router-basic/router-basic.component';
import { JqueryBasicComponent } from './jquery/jquery-basic/jquery-basic.component';
import { AsyncPipeComponent } from './pipes/async-pipe/async-pipe.component';
import { ServicePromiseComponent } from './service/service-promise/service-promise.component';

import { ExampleService } from './example.service'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExampleRoutingModule
  ],
  declarations: [
    /**example main */
    ExampleComponent,
    /** Pipes */
    StringPipeComponent,
    ArrayPipeComponent,
    ObjectPipeComponent,
    MathPipeComponent,
    BooleanPipeComponent,
    AsyncPipeComponent,
    /** Router */
    RouterGuardComponent,
    RouterParameterComponent,
    RouterBasicComponent,
    /** jquery */
    JqueryBasicComponent,
    /** Service */
    ServiceBasicComponent,
    ServicePromiseComponent
  ],
  providers: [ExampleService]
})
export class ExampleModule { }
