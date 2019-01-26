import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MediaMatcher } from '@angular/cdk/layout';
import { NGXLogger } from 'ngx-logger';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
  ],
  providers: [
    MediaMatcher,
    {provide: NGXLogger, useClass: NGXLogger}
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor() {
  }
}
