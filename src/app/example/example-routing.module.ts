
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';

import { StringPipeComponent } from './pipes/string-pipe/string-pipe.component'
import { ArrayPipeComponent } from './pipes/array-pipe/array-pipe.component'
import { ObjectPipeComponent } from './pipes/object-pipe/object-pipe.component'
import { MathPipeComponent } from './pipes/math-pipe/math-pipe.component'
import { BooleanPipeComponent } from './pipes/boolean-pipe/boolean-pipe.component'
import { AsyncPipeComponent } from './pipes/async-pipe/async-pipe.component';

import { RouterGuardComponent } from './router/router-guard/router-guard.component';
import { RouterParameterComponent } from './router/router-parameter/router-parameter.component';
import { RouterBasicComponent } from './router/router-basic/router-basic.component';

import { JqueryBasicComponent } from './jquery/jquery-basic/jquery-basic.component';

import { ServiceBasicComponent } from './service/service-basic/service-basic.component';

import { ServicePromiseComponent } from './service/service-promise/service-promise.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [
      { path: '', component: StringPipeComponent },
      { path: 'pipes/string', component: StringPipeComponent },
      { path: 'pipes/array', component: ArrayPipeComponent },
      { path: 'pipes/object', component: ObjectPipeComponent },
      { path: 'pipes/math', component: MathPipeComponent },
      { path: 'pipes/boolean', component: BooleanPipeComponent },
      { path: 'pipes/async', component: AsyncPipeComponent },

      { path: 'router/basic', component: RouterBasicComponent },
      { path: 'router/param', component: RouterParameterComponent },
      { path: 'router/param/:param', component: RouterParameterComponent },
      { path: 'router/guard', component: RouterGuardComponent },

      { path: 'jquery/basic', component: JqueryBasicComponent },

      { path: 'service/basic', component: ServiceBasicComponent },
      { path: 'service/promise', component: ServicePromiseComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
